import 'package:flutter/material.dart';

class GameConfig {
  final GameImage image;
  final List<Location> locations;

  GameConfig({
    required this.image,
    required this.locations,
  });

  factory GameConfig.fromJson(Map<String, dynamic> json) {
    return GameConfig(
      image: GameImage.fromJson(json['image']),
      locations: (json['locations'] as List)
          .map((location) => Location.fromJson(location))
          .toList(),
    );
  }
}

class GameImage {
  final String url;
  final double width;
  final double height;

  GameImage({
    required this.url,
    required this.width,
    required this.height,
  });

  factory GameImage.fromJson(Map<String, dynamic> json) {
    return GameImage(
      url: json['url'],
      width: json['width'].toDouble(),
      height: json['height'].toDouble(),
    );
  }
}

class Location {
  final String id;
  final String title;
  final String description;
  final String type;
  final String iconName;
  final Color fillColor;
  final Color borderColor;
  final List<Point> polygon;

  Location({
    required this.id,
    required this.title,
    required this.description,
    required this.type,
    required this.iconName,
    required this.fillColor,
    required this.borderColor,
    required this.polygon,
  });

  factory Location.fromJson(Map<String, dynamic> json) {
    return Location(
      id: json['id'],
      title: json['title'],
      description: json['description'],
      type: json['type'],
      iconName: json['iconName'] ?? '',
      fillColor: Color(int.parse(json['fillcolor'].substring(1), radix: 16)),
      borderColor: Color(int.parse(json['bordercolor'].substring(1), radix: 16)),
      polygon: (json['polygon'] as List)
          .map((point) => Point.fromJson(point))
          .toList(),
    );
  }
}

class Point {
  final double x;
  final double y;

  Point({
    required this.x,
    required this.y,
  });

  factory Point.fromJson(Map<String, dynamic> json) {
    return Point(
      x: json['x'].toDouble(),
      y: json['y'].toDouble(),
    );
  }
}

class ResponsivePoint {
  final double x;
  final double y;

  ResponsivePoint({
    required this.x,
    required this.y,
  });

  factory ResponsivePoint.fromPoint(Point point, Size originalSize, Size currentSize) {
    return ResponsivePoint(
      x: (point.x / originalSize.width) * currentSize.width,
      y: (point.y / originalSize.height) * currentSize.height,
    );
  }
}