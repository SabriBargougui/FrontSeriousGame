import 'package:flutter/material.dart';
import '../utils/responsive_utils.dart';

class ResponsiveImage extends StatelessWidget {
  final String imagePath;
  final double? width;
  final double? height;
  final BoxFit? fit;
  final EdgeInsets? padding;
  final BorderRadius? borderRadius;

  const ResponsiveImage({
    Key? key,
    required this.imagePath,
    this.width,
    this.height,
    this.fit,
    this.padding,
    this.borderRadius,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: padding,
      child: ClipRRect(
        borderRadius: borderRadius ?? BorderRadius.zero,
        child: Image.asset(
          imagePath,
          width: width != null
              ? ResponsiveUtils.getResponsiveValue(
                  context,
                  mobile: width! * 0.8,
                  tablet: width! * 0.9,
                  desktop: width!,
                  largeDesktop: width! * 1.1,
                )
              : null,
          height: height != null
              ? ResponsiveUtils.getResponsiveValue(
                  context,
                  mobile: height! * 0.8,
                  tablet: height! * 0.9,
                  desktop: height!,
                  largeDesktop: height! * 1.1,
                )
              : null,
          fit: fit ?? BoxFit.contain,
          errorBuilder: (context, error, stackTrace) {
            return Container(
              width: width,
              height: height,
              color: Colors.grey[300],
              child: const Icon(
                Icons.error_outline,
                color: Colors.grey,
              ),
            );
          },
        ),
      ),
    );
  }
}

class ResponsiveNetworkImage extends StatelessWidget {
  final String imageUrl;
  final double? width;
  final double? height;
  final BoxFit? fit;
  final EdgeInsets? padding;
  final BorderRadius? borderRadius;

  const ResponsiveNetworkImage({
    Key? key,
    required this.imageUrl,
    this.width,
    this.height,
    this.fit,
    this.padding,
    this.borderRadius,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: padding,
      child: ClipRRect(
        borderRadius: borderRadius ?? BorderRadius.zero,
        child: Image.network(
          imageUrl,
          width: width != null
              ? ResponsiveUtils.getResponsiveValue(
                  context,
                  mobile: width! * 0.8,
                  tablet: width! * 0.9,
                  desktop: width!,
                  largeDesktop: width! * 1.1,
                )
              : null,
          height: height != null
              ? ResponsiveUtils.getResponsiveValue(
                  context,
                  mobile: height! * 0.8,
                  tablet: height! * 0.9,
                  desktop: height!,
                  largeDesktop: height! * 1.1,
                )
              : null,
          fit: fit ?? BoxFit.contain,
          loadingBuilder: (context, child, loadingProgress) {
            if (loadingProgress == null) return child;
            return Container(
              width: width,
              height: height,
              color: Colors.grey[300],
              child: const Center(
                child: CircularProgressIndicator(),
              ),
            );
          },
          errorBuilder: (context, error, stackTrace) {
            return Container(
              width: width,
              height: height,
              color: Colors.grey[300],
              child: const Icon(
                Icons.error_outline,
                color: Colors.grey,
              ),
            );
          },
        ),
      ),
    );
  }
}