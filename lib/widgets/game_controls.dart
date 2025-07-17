import 'package:flutter/material.dart';
import '../utils/responsive_utils.dart';

class ResponsiveGameControls extends StatelessWidget {
  final int currentStep;
  final int currentRoom;
  final VoidCallback onPreviousStep;
  final VoidCallback onNextStep;
  final VoidCallback onPreviousRoom;
  final VoidCallback onNextRoom;
  final VoidCallback onReset;

  const ResponsiveGameControls({
    Key? key,
    required this.currentStep,
    required this.currentRoom,
    required this.onPreviousStep,
    required this.onNextStep,
    required this.onPreviousRoom,
    required this.onNextRoom,
    required this.onReset,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ResponsiveWidget(
      mobile: _buildMobileControls(context),
      tablet: _buildTabletControls(context),
      desktop: _buildDesktopControls(context),
      largeDesktop: _buildDesktopControls(context),
    );
  }

  Widget _buildMobileControls(BuildContext context) {
    return Card(
      elevation: 4,
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            _buildControlsHeader(context),
            const SizedBox(height: 16),
            _buildStepControls(context),
            const SizedBox(height: 12),
            _buildRoomControls(context),
            const SizedBox(height: 16),
            _buildResetButton(context),
          ],
        ),
      ),
    );
  }

  Widget _buildTabletControls(BuildContext context) {
    return Card(
      elevation: 4,
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            _buildControlsHeader(context),
            const SizedBox(height: 20),
            Row(
              children: [
                Expanded(child: _buildStepControls(context)),
                const SizedBox(width: 16),
                Expanded(child: _buildRoomControls(context)),
              ],
            ),
            const SizedBox(height: 20),
            _buildResetButton(context),
          ],
        ),
      ),
    );
  }

  Widget _buildDesktopControls(BuildContext context) {
    return Card(
      elevation: 4,
      child: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            _buildControlsHeader(context),
            const SizedBox(height: 24),
            Row(
              children: [
                Expanded(child: _buildStepControls(context)),
                const SizedBox(width: 24),
                Expanded(child: _buildRoomControls(context)),
              ],
            ),
            const SizedBox(height: 24),
            _buildResetButton(context),
          ],
        ),
      ),
    );
  }

  Widget _buildControlsHeader(BuildContext context) {
    return Row(
      children: [
        Icon(
          Icons.gamepad,
          size: ResponsiveUtils.getResponsiveValue(
            context,
            mobile: 24,
            tablet: 28,
            desktop: 32,
          ),
          color: Theme.of(context).primaryColor,
        ),
        const SizedBox(width: 8),
        Text(
          'Game Controls',
          style: TextStyle(
            fontSize: ResponsiveUtils.getResponsiveFontSize(
              context,
              baseFontSize: 18,
            ),
            fontWeight: FontWeight.bold,
          ),
        ),
      ],
    );
  }

  Widget _buildStepControls(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Steps',
          style: TextStyle(
            fontSize: ResponsiveUtils.getResponsiveFontSize(
              context,
              baseFontSize: 16,
            ),
            fontWeight: FontWeight.w600,
          ),
        ),
        const SizedBox(height: 12),
        Row(
          children: [
            _buildControlButton(
              context,
              icon: Icons.arrow_back,
              label: 'Previous',
              onPressed: currentStep > 1 ? onPreviousStep : null,
            ),
            const SizedBox(width: 8),
            Expanded(
              child: Container(
                padding: const EdgeInsets.symmetric(vertical: 8),
                decoration: BoxDecoration(
                  color: Theme.of(context).primaryColor.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Center(
                  child: Text(
                    '$currentStep / 4',
                    style: TextStyle(
                      fontSize: ResponsiveUtils.getResponsiveFontSize(
                        context,
                        baseFontSize: 16,
                      ),
                      fontWeight: FontWeight.bold,
                      color: Theme.of(context).primaryColor,
                    ),
                  ),
                ),
              ),
            ),
            const SizedBox(width: 8),
            _buildControlButton(
              context,
              icon: Icons.arrow_forward,
              label: 'Next',
              onPressed: currentStep < 4 ? onNextStep : null,
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildRoomControls(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Rooms',
          style: TextStyle(
            fontSize: ResponsiveUtils.getResponsiveFontSize(
              context,
              baseFontSize: 16,
            ),
            fontWeight: FontWeight.w600,
          ),
        ),
        const SizedBox(height: 12),
        Row(
          children: [
            _buildControlButton(
              context,
              icon: Icons.arrow_back,
              label: 'Previous',
              onPressed: currentRoom > 1 ? onPreviousRoom : null,
            ),
            const SizedBox(width: 8),
            Expanded(
              child: Container(
                padding: const EdgeInsets.symmetric(vertical: 8),
                decoration: BoxDecoration(
                  color: Theme.of(context).primaryColor.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Center(
                  child: Text(
                    '$currentRoom / 4',
                    style: TextStyle(
                      fontSize: ResponsiveUtils.getResponsiveFontSize(
                        context,
                        baseFontSize: 16,
                      ),
                      fontWeight: FontWeight.bold,
                      color: Theme.of(context).primaryColor,
                    ),
                  ),
                ),
              ),
            ),
            const SizedBox(width: 8),
            _buildControlButton(
              context,
              icon: Icons.arrow_forward,
              label: 'Next',
              onPressed: currentRoom < 4 ? onNextRoom : null,
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildControlButton(
    BuildContext context, {
    required IconData icon,
    required String label,
    required VoidCallback? onPressed,
  }) {
    final isEnabled = onPressed != null;
    
    return Expanded(
      child: ElevatedButton(
        onPressed: onPressed,
        style: ElevatedButton.styleFrom(
          backgroundColor: isEnabled 
              ? Theme.of(context).primaryColor
              : Colors.grey.withOpacity(0.3),
          foregroundColor: isEnabled ? Colors.white : Colors.grey,
          padding: EdgeInsets.symmetric(
            vertical: ResponsiveUtils.getResponsiveValue(
              context,
              mobile: 8,
              tablet: 12,
              desktop: 16,
            ),
          ),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
          ),
        ),
        child: ResponsiveUtils.isMobile(context)
            ? Icon(icon, size: 20)
            : Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(icon, size: 16),
                  const SizedBox(width: 4),
                  Text(
                    label,
                    style: TextStyle(
                      fontSize: ResponsiveUtils.getResponsiveFontSize(
                        context,
                        baseFontSize: 12,
                      ),
                    ),
                  ),
                ],
              ),
      ),
    );
  }

  Widget _buildResetButton(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      child: OutlinedButton.icon(
        onPressed: onReset,
        icon: const Icon(Icons.refresh),
        label: Text(
          'Reset Game',
          style: TextStyle(
            fontSize: ResponsiveUtils.getResponsiveFontSize(
              context,
              baseFontSize: 16,
            ),
          ),
        ),
        style: OutlinedButton.styleFrom(
          padding: EdgeInsets.symmetric(
            vertical: ResponsiveUtils.getResponsiveValue(
              context,
              mobile: 12,
              tablet: 16,
              desktop: 20,
            ),
          ),
          side: BorderSide(
            color: Theme.of(context).primaryColor,
            width: 2,
          ),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
          ),
        ),
      ),
    );
  }
}