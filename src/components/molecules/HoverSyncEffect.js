import { useEffect, useRef } from 'react';

/**
 * HoverSyncEffect - A utility component that synchronizes hover states between brain segments and question cards
 * This is implemented as a custom hook rather than a visual component
 */
export const useHoverSync = ({
  activeElementId = null,
  onHoverChange = null,
  syncDelay = 50 // Small delay to prevent flickering
}) => {
  const hoverTimeoutRef = useRef(null);
  const currentHoveredRef = useRef(null);

  const triggerHover = (elementId, isEntering = true) => {
    // Clear any pending timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    if (isEntering) {
      // Set hover immediately for entering
      currentHoveredRef.current = elementId;
      if (onHoverChange) {
        onHoverChange(elementId);
      }
    } else {
      // Add slight delay for leaving to prevent flickering
      hoverTimeoutRef.current = setTimeout(() => {
        if (currentHoveredRef.current === elementId) {
          currentHoveredRef.current = null;
          if (onHoverChange) {
            onHoverChange(null);
          }
        }
      }, syncDelay);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return {
    triggerHover,
    currentHovered: currentHoveredRef.current
  };
};

/**
 * Cross-element hover synchronizer
 * Manages hover state between brain segments and question cards
 */
export class HoverSyncManager {
  constructor() {
    this.subscribers = new Map();
    this.currentHover = null;
    this.debounceTimeout = null;
  }

  subscribe(elementId, callback) {
    this.subscribers.set(elementId, callback);
    
    // Return unsubscribe function
    return () => {
      this.subscribers.delete(elementId);
    };
  }

  setHover(elementId, delay = 0) {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }

    this.debounceTimeout = setTimeout(() => {
      if (this.currentHover !== elementId) {
        this.currentHover = elementId;
        this.notifySubscribers(elementId);
      }
    }, delay);
  }

  clearHover(elementId, delay = 50) {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }

    this.debounceTimeout = setTimeout(() => {
      if (this.currentHover === elementId) {
        this.currentHover = null;
        this.notifySubscribers(null);
      }
    }, delay);
  }

  notifySubscribers(hoveredElementId) {
    this.subscribers.forEach((callback, subscriberId) => {
      callback(hoveredElementId, subscriberId === hoveredElementId);
    });
  }

  getCurrentHover() {
    return this.currentHover;
  }

  destroy() {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
    this.subscribers.clear();
    this.currentHover = null;
  }
}

// Create a singleton instance for the requirements page
export const requirementsHoverSync = new HoverSyncManager();

/**
 * React hook to use the hover sync manager
 */
export const useHoverSyncManager = (elementId, onHoverChange = null) => {
  useEffect(() => {
    const unsubscribe = requirementsHoverSync.subscribe(elementId, (hoveredId, isHovered) => {
      if (onHoverChange) {
        onHoverChange(hoveredId, isHovered);
      }
    });

    return unsubscribe;
  }, [elementId, onHoverChange]);

  const handleMouseEnter = () => {
    requirementsHoverSync.setHover(elementId);
  };

  const handleMouseLeave = () => {
    requirementsHoverSync.clearHover(elementId);
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
    currentHover: requirementsHoverSync.getCurrentHover()
  };
};

export default {
  useHoverSync,
  HoverSyncManager,
  requirementsHoverSync,
  useHoverSyncManager
};