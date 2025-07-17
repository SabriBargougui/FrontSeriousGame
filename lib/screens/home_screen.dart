import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/game_provider.dart';
import '../utils/responsive_utils.dart';
import '../widgets/responsive_image.dart';
import '../widgets/step_indicator.dart';
import '../widgets/room_selector.dart';
import '../widgets/interactive_map.dart';
import '../widgets/game_controls.dart';

class HomeScreen extends StatelessWidget {
  final bool isMobile;

  const HomeScreen({
    Key? key,
    required this.isMobile,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Consumer<GameProvider>(
      builder: (context, gameProvider, child) {
        if (gameProvider.isLoading) {
          return const Center(
            child: CircularProgressIndicator(),
          );
        }

        if (gameProvider.error != null) {
          return Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(
                  Icons.error_outline,
                  size: ResponsiveUtils.getResponsiveValue(
                    context,
                    mobile: 48,
                    tablet: 64,
                    desktop: 80,
                  ),
                  color: Colors.red,
                ),
                const SizedBox(height: 16),
                Text(
                  'Error: ${gameProvider.error}',
                  style: TextStyle(
                    fontSize: ResponsiveUtils.getResponsiveFontSize(
                      context,
                      baseFontSize: 16,
                    ),
                    color: Colors.red,
                  ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 16),
                ElevatedButton(
                  onPressed: () => gameProvider.loadGameConfiguration(),
                  child: const Text('Retry'),
                ),
              ],
            ),
          );
        }

        return ResponsiveWidget(
          mobile: _buildMobileLayout(context, gameProvider),
          tablet: _buildTabletLayout(context, gameProvider),
          desktop: _buildDesktopLayout(context, gameProvider),
          largeDesktop: _buildLargeDesktopLayout(context, gameProvider),
        );
      },
    );
  }

  Widget _buildMobileLayout(BuildContext context, GameProvider gameProvider) {
    return SafeArea(
      child: SingleChildScrollView(
        child: Column(
          children: [
            _buildHeader(context, gameProvider),
            SizedBox(height: ResponsiveUtils.getResponsiveSpacing(context)),
            _buildStepIndicator(context, gameProvider),
            SizedBox(height: ResponsiveUtils.getResponsiveSpacing(context)),
            _buildMainContent(context, gameProvider),
            SizedBox(height: ResponsiveUtils.getResponsiveSpacing(context)),
            _buildGameControls(context, gameProvider),
          ],
        ),
      ),
    );
  }

  Widget _buildTabletLayout(BuildContext context, GameProvider gameProvider) {
    return SafeArea(
      child: Column(
        children: [
          _buildHeader(context, gameProvider),
          SizedBox(height: ResponsiveUtils.getResponsiveSpacing(context)),
          _buildStepIndicator(context, gameProvider),
          SizedBox(height: ResponsiveUtils.getResponsiveSpacing(context)),
          Expanded(
            child: Row(
              children: [
                Expanded(
                  flex: 7,
                  child: _buildMainContent(context, gameProvider),
                ),
                SizedBox(width: ResponsiveUtils.getResponsiveSpacing(context)),
                Expanded(
                  flex: 3,
                  child: _buildSidePanel(context, gameProvider),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDesktopLayout(BuildContext context, GameProvider gameProvider) {
    return SafeArea(
      child: Column(
        children: [
          _buildHeader(context, gameProvider),
          SizedBox(height: ResponsiveUtils.getResponsiveSpacing(context)),
          _buildStepIndicator(context, gameProvider),
          SizedBox(height: ResponsiveUtils.getResponsiveSpacing(context)),
          Expanded(
            child: Row(
              children: [
                Expanded(
                  flex: 2,
                  child: _buildLeftPanel(context, gameProvider),
                ),
                SizedBox(width: ResponsiveUtils.getResponsiveSpacing(context)),
                Expanded(
                  flex: 6,
                  child: _buildMainContent(context, gameProvider),
                ),
                SizedBox(width: ResponsiveUtils.getResponsiveSpacing(context)),
                Expanded(
                  flex: 2,
                  child: _buildRightPanel(context, gameProvider),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildLargeDesktopLayout(BuildContext context, GameProvider gameProvider) {
    return SafeArea(
      child: Column(
        children: [
          _buildHeader(context, gameProvider),
          SizedBox(height: ResponsiveUtils.getResponsiveSpacing(context) * 1.5),
          _buildStepIndicator(context, gameProvider),
          SizedBox(height: ResponsiveUtils.getResponsiveSpacing(context) * 1.5),
          Expanded(
            child: Row(
              children: [
                Expanded(
                  flex: 2,
                  child: _buildLeftPanel(context, gameProvider),
                ),
                SizedBox(width: ResponsiveUtils.getResponsiveSpacing(context) * 1.5),
                Expanded(
                  flex: 6,
                  child: _buildMainContent(context, gameProvider),
                ),
                SizedBox(width: ResponsiveUtils.getResponsiveSpacing(context) * 1.5),
                Expanded(
                  flex: 2,
                  child: _buildRightPanel(context, gameProvider),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildHeader(BuildContext context, GameProvider gameProvider) {
    return Container(
      padding: ResponsiveUtils.getResponsivePadding(context),
      child: Row(
        children: [
          ResponsiveImage(
            imagePath: 'assets/images/logo.png',
            height: ResponsiveUtils.getResponsiveValue(
              context,
              mobile: 40,
              tablet: 48,
              desktop: 56,
              largeDesktop: 64,
            ),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Text(
              'Serious Game',
              style: TextStyle(
                fontSize: ResponsiveUtils.getResponsiveFontSize(
                  context,
                  baseFontSize: 24,
                ),
                fontWeight: FontWeight.bold,
                color: Theme.of(context).primaryColor,
              ),
            ),
          ),
          IconButton(
            icon: const Icon(Icons.settings),
            iconSize: ResponsiveUtils.getResponsiveIconSize(context),
            onPressed: () {
              // Settings action
            },
          ),
        ],
      ),
    );
  }

  Widget _buildStepIndicator(BuildContext context, GameProvider gameProvider) {
    return ResponsiveStepIndicator(
      currentStep: gameProvider.currentStep,
      totalSteps: 4,
      onStepTapped: (step) => gameProvider.setCurrentStep(step),
    );
  }

  Widget _buildMainContent(BuildContext context, GameProvider gameProvider) {
    return Card(
      elevation: 4,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(8),
        child: InteractiveMap(
          gameConfig: gameProvider.gameConfig!,
          currentRoom: gameProvider.currentRoom,
          onRoomSelected: (roomId) => gameProvider.setCurrentRoom(int.parse(roomId)),
        ),
      ),
    );
  }

  Widget _buildSidePanel(BuildContext context, GameProvider gameProvider) {
    return Column(
      children: [
        Expanded(
          child: RoomSelector(
            currentRoom: gameProvider.currentRoom,
            onRoomSelected: (room) => gameProvider.setCurrentRoom(room),
          ),
        ),
        const SizedBox(height: 16),
        _buildGameControls(context, gameProvider),
      ],
    );
  }

  Widget _buildLeftPanel(BuildContext context, GameProvider gameProvider) {
    return RoomSelector(
      currentRoom: gameProvider.currentRoom,
      onRoomSelected: (room) => gameProvider.setCurrentRoom(room),
    );
  }

  Widget _buildRightPanel(BuildContext context, GameProvider gameProvider) {
    return Column(
      children: [
        _buildGameInfo(context, gameProvider),
        const Spacer(),
        _buildGameControls(context, gameProvider),
      ],
    );
  }

  Widget _buildGameInfo(BuildContext context, GameProvider gameProvider) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Game Info',
              style: TextStyle(
                fontSize: ResponsiveUtils.getResponsiveFontSize(
                  context,
                  baseFontSize: 18,
                ),
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 12),
            _buildInfoRow('Current Step', '${gameProvider.currentStep}/4'),
            _buildInfoRow('Current Room', gameProvider.currentRoom.toString()),
            _buildInfoRow('Current Question', gameProvider.currentQuestion.toString()),
          ],
        ),
      ),
    );
  }

  Widget _buildInfoRow(String label, String value) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(label),
          Text(
            value,
            style: const TextStyle(fontWeight: FontWeight.bold),
          ),
        ],
      ),
    );
  }

  Widget _buildGameControls(BuildContext context, GameProvider gameProvider) {
    return ResponsiveGameControls(
      currentStep: gameProvider.currentStep,
      currentRoom: gameProvider.currentRoom,
      onPreviousStep: gameProvider.previousStep,
      onNextStep: gameProvider.nextStep,
      onPreviousRoom: gameProvider.previousRoom,
      onNextRoom: gameProvider.nextRoom,
      onReset: gameProvider.reset,
    );
  }
}