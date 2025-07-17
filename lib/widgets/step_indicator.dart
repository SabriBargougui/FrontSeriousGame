import 'package:flutter/material.dart';
import '../utils/responsive_utils.dart';

class ResponsiveStepIndicator extends StatelessWidget {
  final int currentStep;
  final int totalSteps;
  final Function(int) onStepTapped;

  const ResponsiveStepIndicator({
    Key? key,
    required this.currentStep,
    required this.totalSteps,
    required this.onStepTapped,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ResponsiveContainer(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: List.generate(totalSteps, (index) {
          final stepNumber = index + 1;
          final isActive = stepNumber == currentStep;
          final isCompleted = stepNumber < currentStep;
          
          return Row(
            children: [
              _buildStepCircle(context, stepNumber, isActive, isCompleted),
              if (index < totalSteps - 1)
                _buildStepConnector(context, stepNumber < currentStep),
            ],
          );
        }),
      ),
    );
  }

  Widget _buildStepCircle(
    BuildContext context,
    int stepNumber,
    bool isActive,
    bool isCompleted,
  ) {
    final size = ResponsiveUtils.getResponsiveValue(
      context,
      mobile: 40.0,
      tablet: 48.0,
      desktop: 56.0,
      largeDesktop: 64.0,
    );

    Color backgroundColor;
    Color textColor;
    IconData? icon;

    if (isCompleted) {
      backgroundColor = Theme.of(context).primaryColor;
      textColor = Colors.white;
      icon = Icons.check;
    } else if (isActive) {
      backgroundColor = Theme.of(context).primaryColor;
      textColor = Colors.white;
    } else {
      backgroundColor = Theme.of(context).primaryColor.withOpacity(0.3);
      textColor = Theme.of(context).primaryColor;
    }

    return GestureDetector(
      onTap: () => onStepTapped(stepNumber),
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          color: backgroundColor,
          shape: BoxShape.circle,
          border: Border.all(
            color: Theme.of(context).primaryColor,
            width: 2,
          ),
        ),
        child: Center(
          child: icon != null
              ? Icon(
                  icon,
                  color: textColor,
                  size: size * 0.5,
                )
              : Text(
                  stepNumber.toString(),
                  style: TextStyle(
                    color: textColor,
                    fontSize: ResponsiveUtils.getResponsiveFontSize(
                      context,
                      baseFontSize: 16,
                    ),
                    fontWeight: FontWeight.bold,
                  ),
                ),
        ),
      ),
    );
  }

  Widget _buildStepConnector(BuildContext context, bool isCompleted) {
    final width = ResponsiveUtils.getResponsiveValue(
      context,
      mobile: 40.0,
      tablet: 60.0,
      desktop: 80.0,
      largeDesktop: 100.0,
    );

    return Container(
      width: width,
      height: 4,
      color: isCompleted 
          ? Theme.of(context).primaryColor
          : Theme.of(context).primaryColor.withOpacity(0.3),
    );
  }
}