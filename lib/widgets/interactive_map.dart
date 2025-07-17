import 'package:flutter/material.dart';
import 'dart:math' as math;
import '../models/game_config.dart';
import '../utils/responsive_utils.dart';

class InteractiveMap extends StatefulWidget {
  final GameConfig gameConfig;
  final int currentRoom;
  final Function(String) onRoomSelected;

  const InteractiveMap({
    Key? key,
    required this.gameConfig,
    required this.currentRoom,
    required this.onRoomSelected,
  }) : super(key: key);

  @override
  State<InteractiveMap> createState() => _InteractiveMapState();
}

class _InteractiveMapState extends State<InteractiveMap> {
  String? hoveredRoomId;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final originalSize = Size(
          widget.gameConfig.image.width,
          widget.gameConfig.image.height,
        );
        final currentSize = _calculateImageSize(constraints, originalSize);
        
        return Container(
          width: currentSize.width,
          height: currentSize.height,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(8),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.1),
                blurRadius: 8,
                offset: const Offset(0, 4),
              ),
            ],
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(8),
            child: Stack(
            children: [
              // Background image
              Positioned.fill(
                child: Image.asset(
                  widget.gameConfig.image.url,
                  fit: BoxFit.contain,
                ),
              ),
              // Interactive overlay
              Positioned.fill(
                child: CustomPaint(
                  painter: InteractiveMapPainter(
                    locations: widget.gameConfig.locations,
                    originalSize: originalSize,
                    currentSize: currentSize,
                    currentRoom: widget.currentRoom,
                    hoveredRoomId: hoveredRoomId,
                  ),
                ),
              ),
              // Touch handler
              Positioned.fill(
                child: GestureDetector(
                  onTapDown: (details) {
                    final roomId = _getRoomIdAtPosition(
                      details.localPosition,
                      originalSize,
                      currentSize,
                    );
                    if (roomId != null) {
                      widget.onRoomSelected(roomId);
                    }
                  },
                ),
              ),
              // Hover handler (for web/desktop)
              Positioned.fill(
                child: MouseRegion(
                  onHover: (event) {
                    final roomId = _getRoomIdAtPosition(
                      event.localPosition,
                      originalSize,
                      currentSize,
                    );
                    if (roomId != hoveredRoomId) {
                      setState(() {
                        hoveredRoomId = roomId;
                      });
                    }
                  },
                  onExit: (event) {
                    setState(() {
                      hoveredRoomId = null;
                    });
                  },
                  child: Container(),
                ),
              ),
            ],
            ),
          ),
        );
      },
    );
  }

  Size _calculateImageSize(BoxConstraints constraints, Size originalSize) {
    final aspectRatio = originalSize.width / originalSize.height;
    final availableWidth = constraints.maxWidth;
    final availableHeight = constraints.maxHeight;
    
    double width, height;
    
    if (availableWidth / availableHeight > aspectRatio) {
      // Height is the limiting factor
      height = availableHeight;
      width = height * aspectRatio;
    } else {
      // Width is the limiting factor
      width = availableWidth;
      height = width / aspectRatio;
    }
    
    // Ensure minimum size for very small screens
    final minSize = 300.0;
    if (width < minSize || height < minSize) {
      if (width < height) {
        width = minSize;
        height = minSize / aspectRatio;
      } else {
        height = minSize;
        width = minSize * aspectRatio;
      }
    }
    
    return Size(width, height);
  }

  String? _getRoomIdAtPosition(
    Offset position,
    Size originalSize,
    Size currentSize,
  ) {
    for (final location in widget.gameConfig.locations) {
      final scaledPolygon = location.polygon.map((point) {
        return ResponsivePoint.fromPoint(point, originalSize, currentSize);
      }).toList();
      
      if (_isPointInPolygon(position, scaledPolygon)) {
        return location.id;
      }
    }
    return null;
  }

  bool _isPointInPolygon(Offset point, List<ResponsivePoint> polygon) {
    if (polygon.length < 3) return false;
    
    bool inside = false;
    for (int i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      final xi = polygon[i].x;
      final yi = polygon[i].y;
      final xj = polygon[j].x;
      final yj = polygon[j].y;
      
      if (((yi > point.dy) != (yj > point.dy)) &&
          (point.dx < (xj - xi) * (point.dy - yi) / (yj - yi) + xi)) {
        inside = !inside;
      }
    }
    return inside;
  }
}

class InteractiveMapPainter extends CustomPainter {
  final List<Location> locations;
  final Size originalSize;
  final Size currentSize;
  final int currentRoom;
  final String? hoveredRoomId;

  InteractiveMapPainter({
    required this.locations,
    required this.originalSize,
    required this.currentSize,
    required this.currentRoom,
    this.hoveredRoomId,
  });

  @override
  void paint(Canvas canvas, Size size) {
    for (final location in locations) {
      final isCurrentRoom = location.id == currentRoom.toString();
      final isHovered = location.id == hoveredRoomId;
      
      final scaledPolygon = location.polygon.map((point) {
        return ResponsivePoint.fromPoint(point, originalSize, currentSize);
      }).toList();
      
      _drawPolygon(canvas, scaledPolygon, location, isCurrentRoom, isHovered);
    }
  }

  void _drawPolygon(
    Canvas canvas,
    List<ResponsivePoint> polygon,
    Location location,
    bool isCurrentRoom,
    bool isHovered,
  ) {
    if (polygon.isEmpty) return;
    
    final path = Path();
    path.moveTo(polygon[0].x, polygon[0].y);
    
    for (int i = 1; i < polygon.length; i++) {
      path.lineTo(polygon[i].x, polygon[i].y);
    }
    path.close();
    
    // Fill color
    Color fillColor = location.fillColor;
    if (isCurrentRoom) {
      fillColor = fillColor.withOpacity(0.8);
    } else if (isHovered) {
      fillColor = fillColor.withOpacity(0.6);
    } else {
      fillColor = fillColor.withOpacity(0.4);
    }
    
    final fillPaint = Paint()
      ..color = fillColor
      ..style = PaintingStyle.fill;
    
    canvas.drawPath(path, fillPaint);
    
    // Border
    Color borderColor = location.borderColor;
    if (isCurrentRoom || isHovered) {
      borderColor = borderColor.withOpacity(1.0);
    } else {
      borderColor = borderColor.withOpacity(0.7);
    }
    
    final borderPaint = Paint()
      ..color = borderColor
      ..style = PaintingStyle.stroke
      ..strokeWidth = isCurrentRoom ? 3.0 : (isHovered ? 2.5 : 2.0);
    
    canvas.drawPath(path, borderPaint);
    
    // Draw room label
    _drawRoomLabel(canvas, polygon, location, isCurrentRoom, isHovered);
  }

  void _drawRoomLabel(
    Canvas canvas,
    List<ResponsivePoint> polygon,
    Location location,
    bool isCurrentRoom,
    bool isHovered,
  ) {
    // Calculate polygon center
    double centerX = 0;
    double centerY = 0;
    for (final point in polygon) {
      centerX += point.x;
      centerY += point.y;
    }
    centerX /= polygon.length;
    centerY /= polygon.length;
    
    // Draw room number
    final textPainter = TextPainter(
      text: TextSpan(
        text: location.id,
        style: TextStyle(
          color: isCurrentRoom ? Colors.white : Colors.black,
          fontSize: _getResponsiveTextSize(currentSize),
          fontWeight: FontWeight.bold,
        ),
      ),
      textDirection: TextDirection.ltr,
    );
    
    textPainter.layout();
    textPainter.paint(
      canvas,
      Offset(
        centerX - textPainter.width / 2,
        centerY - textPainter.height / 2,
      ),
    );
    
    // Draw room title if hovered or current
    if (isHovered || isCurrentRoom) {
      final titlePainter = TextPainter(
        text: TextSpan(
          text: location.title,
          style: TextStyle(
            color: isCurrentRoom ? Colors.white : Colors.black87,
            fontSize: _getResponsiveTextSize(currentSize) * 0.75,
            fontWeight: FontWeight.w500,
          ),
        ),
        textDirection: TextDirection.ltr,
      );
      
      titlePainter.layout();
      titlePainter.paint(
        canvas,
        Offset(
          centerX - titlePainter.width / 2,
          centerY + textPainter.height / 2 + 4,
        ),
      );
    }
  }

  double _getResponsiveTextSize(Size currentSize) {
    // Scale text size based on the current display size
    final scaleFactor = math.min(currentSize.width / 1200, currentSize.height / 800);
    return math.max(12.0, 16.0 * scaleFactor);
  }

  @override
  bool shouldRepaint(covariant InteractiveMapPainter oldDelegate) {
    return oldDelegate.currentRoom != currentRoom ||
           oldDelegate.hoveredRoomId != hoveredRoomId ||
           oldDelegate.originalSize != originalSize ||
           oldDelegate.currentSize != currentSize;
  }
}