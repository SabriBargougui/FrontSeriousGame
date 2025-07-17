import 'package:flutter/material.dart';
import '../utils/responsive_utils.dart';

class RoomSelector extends StatelessWidget {
  final int currentRoom;
  final Function(int) onRoomSelected;

  const RoomSelector({
    Key? key,
    required this.currentRoom,
    required this.onRoomSelected,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4,
      child: Padding(
        padding: ResponsiveUtils.getResponsivePadding(context),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Room Selection',
              style: TextStyle(
                fontSize: ResponsiveUtils.getResponsiveFontSize(
                  context,
                  baseFontSize: 18,
                ),
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            Expanded(
              child: ListView.builder(
                itemCount: 4, // Total rooms
                itemBuilder: (context, index) {
                  final roomNumber = index + 1;
                  final isSelected = roomNumber == currentRoom;
                  
                  return _buildRoomItem(context, roomNumber, isSelected);
                },
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildRoomItem(BuildContext context, int roomNumber, bool isSelected) {
    final roomData = _getRoomData(roomNumber);
    
    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      child: Material(
        color: isSelected 
            ? Theme.of(context).primaryColor.withOpacity(0.1)
            : Colors.transparent,
        borderRadius: BorderRadius.circular(8),
        child: InkWell(
          onTap: () => onRoomSelected(roomNumber),
          borderRadius: BorderRadius.circular(8),
          child: Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              border: Border.all(
                color: isSelected 
                    ? Theme.of(context).primaryColor
                    : Colors.grey.withOpacity(0.3),
                width: isSelected ? 2 : 1,
              ),
              borderRadius: BorderRadius.circular(8),
            ),
            child: Row(
              children: [
                Container(
                  width: 40,
                  height: 40,
                  decoration: BoxDecoration(
                    color: isSelected 
                        ? Theme.of(context).primaryColor
                        : Colors.grey.withOpacity(0.2),
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: Icon(
                    roomData.icon,
                    color: isSelected 
                        ? Colors.white
                        : Theme.of(context).primaryColor,
                    size: 24,
                  ),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        roomData.title,
                        style: TextStyle(
                          fontSize: ResponsiveUtils.getResponsiveFontSize(
                            context,
                            baseFontSize: 16,
                          ),
                          fontWeight: FontWeight.bold,
                          color: isSelected 
                              ? Theme.of(context).primaryColor
                              : null,
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        roomData.description,
                        style: TextStyle(
                          fontSize: ResponsiveUtils.getResponsiveFontSize(
                            context,
                            baseFontSize: 14,
                          ),
                          color: Colors.grey[600],
                        ),
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                      ),
                    ],
                  ),
                ),
                if (isSelected)
                  Icon(
                    Icons.check_circle,
                    color: Theme.of(context).primaryColor,
                    size: 24,
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  RoomData _getRoomData(int roomNumber) {
    switch (roomNumber) {
      case 1:
        return RoomData(
          title: 'Reception Room',
          description: 'Welcome area with information desk',
          icon: Icons.home,
        );
      case 2:
        return RoomData(
          title: 'Technical Room',
          description: 'Equipment and technical facilities',
          icon: Icons.build,
        );
      case 3:
        return RoomData(
          title: 'Meeting Room',
          description: 'Conference and presentation area',
          icon: Icons.meeting_room,
        );
      case 4:
        return RoomData(
          title: 'Storage Room',
          description: 'Storage and inventory area',
          icon: Icons.storage,
        );
      default:
        return RoomData(
          title: 'Unknown Room',
          description: 'Room information not available',
          icon: Icons.help_outline,
        );
    }
  }
}

class RoomData {
  final String title;
  final String description;
  final IconData icon;

  RoomData({
    required this.title,
    required this.description,
    required this.icon,
  });
}