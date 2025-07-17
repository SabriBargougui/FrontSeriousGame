import 'package:flutter/material.dart';

class ResponsiveUtils {
  static const double mobileBreakpoint = 600;
  static const double tabletBreakpoint = 900;
  static const double desktopBreakpoint = 1200;
  static const double largeDesktopBreakpoint = 1440;
  
  // Additional breakpoints for better mobile experience
  static const double smallMobileBreakpoint = 400;
  static const double largeMobileBreakpoint = 768;

  static bool isMobile(BuildContext context) =>
      MediaQuery.of(context).size.width < mobileBreakpoint;

  static bool isSmallMobile(BuildContext context) =>
      MediaQuery.of(context).size.width < smallMobileBreakpoint;

  static bool isLargeMobile(BuildContext context) =>
      MediaQuery.of(context).size.width >= largeMobileBreakpoint &&
      MediaQuery.of(context).size.width < mobileBreakpoint;

  static bool isTablet(BuildContext context) =>
      MediaQuery.of(context).size.width >= mobileBreakpoint &&
      MediaQuery.of(context).size.width < desktopBreakpoint;

  static bool isDesktop(BuildContext context) =>
      MediaQuery.of(context).size.width >= desktopBreakpoint;

  static bool isLargeDesktop(BuildContext context) =>
      MediaQuery.of(context).size.width >= largeDesktopBreakpoint;

  static double getResponsiveValue(
    BuildContext context, {
    required double mobile,
    required double tablet,
    required double desktop,
    double? largeDesktop,
    double? smallMobile,
    double? largeMobile,
  }) {
    if (isLargeDesktop(context) && largeDesktop != null) {
      return largeDesktop;
    } else if (isDesktop(context)) {
      return desktop;
    } else if (isTablet(context)) {
      return tablet;
    } else if (isLargeMobile(context) && largeMobile != null) {
      return largeMobile;
    } else if (isSmallMobile(context) && smallMobile != null) {
      return smallMobile;
    } else {
      return mobile;
    }
  }

  static EdgeInsets getResponsivePadding(BuildContext context) {
    return EdgeInsets.symmetric(
      horizontal: getResponsiveValue(
        context,
        mobile: 16,
        tablet: 32,
        desktop: 48,
        largeDesktop: 64,
        smallMobile: 12,
        largeMobile: 20,
      ),
      vertical: getResponsiveValue(
        context,
        mobile: 8,
        tablet: 16,
        desktop: 24,
        largeDesktop: 32,
        smallMobile: 6,
        largeMobile: 12,
      ),
    );
  }

  static double getResponsiveFontSize(
    BuildContext context, {
    required double baseFontSize,
  }) {
    final scaleFactor = getResponsiveValue(
      context,
      mobile: 0.9,
      tablet: 1.0,
      desktop: 1.1,
      largeDesktop: 1.2,
      smallMobile: 0.8,
      largeMobile: 0.95,
    );
    return baseFontSize * scaleFactor;
  }

  static Size getResponsiveImageSize(
    BuildContext context,
    Size originalSize,
  ) {
    final scaleFactor = getResponsiveValue(
      context,
      mobile: 0.7,
      tablet: 0.85,
      desktop: 1.0,
      largeDesktop: 1.2,
      smallMobile: 0.6,
      largeMobile: 0.75,
    );
    return Size(
      originalSize.width * scaleFactor,
      originalSize.height * scaleFactor,
    );
  }

  static double getMaxContentWidth(BuildContext context) {
    return getResponsiveValue(
      context,
      mobile: double.infinity,
      tablet: 800,
      desktop: 1200,
      largeDesktop: 1400,
      smallMobile: double.infinity,
      largeMobile: double.infinity,
    );
  }

  /// Get responsive spacing between elements
  static double getResponsiveSpacing(BuildContext context) {
    return getResponsiveValue(
      context,
      mobile: 16,
      tablet: 20,
      desktop: 24,
      largeDesktop: 32,
      smallMobile: 12,
      largeMobile: 16,
    );
  }

  /// Get responsive icon size
  static double getResponsiveIconSize(BuildContext context) {
    return getResponsiveValue(
      context,
      mobile: 24,
      tablet: 28,
      desktop: 32,
      largeDesktop: 36,
      smallMobile: 20,
      largeMobile: 24,
    );
  }

  /// Get responsive button height
  static double getResponsiveButtonHeight(BuildContext context) {
    return getResponsiveValue(
      context,
      mobile: 48,
      tablet: 52,
      desktop: 56,
      largeDesktop: 60,
      smallMobile: 44,
      largeMobile: 48,
    );
  }
}

class ResponsiveWidget extends StatelessWidget {
  final Widget mobile;
  final Widget? tablet;
  final Widget desktop;
  final Widget? largeDesktop;

  const ResponsiveWidget({
    Key? key,
    required this.mobile,
    this.tablet,
    required this.desktop,
    this.largeDesktop,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (ResponsiveUtils.isLargeDesktop(context) && largeDesktop != null) {
      return largeDesktop!;
    } else if (ResponsiveUtils.isDesktop(context)) {
      return desktop;
    } else if (ResponsiveUtils.isTablet(context)) {
      return tablet ?? desktop;
    } else {
      return mobile;
    }
  }
}

class ResponsiveContainer extends StatelessWidget {
  final Widget child;
  final EdgeInsets? padding;
  final double? maxWidth;

  const ResponsiveContainer({
    Key? key,
    required this.child,
    this.padding,
    this.maxWidth,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: padding ?? ResponsiveUtils.getResponsivePadding(context),
      child: Center(
        child: Container(
          constraints: BoxConstraints(
            maxWidth: maxWidth ?? ResponsiveUtils.getMaxContentWidth(context),
          ),
          child: child,
        ),
      ),
    );
  }
}