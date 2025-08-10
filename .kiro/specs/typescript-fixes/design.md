# Design Document

## Overview

This design addresses TypeScript compilation errors and CSS warnings in the Picco application. The fixes focus on type safety, consistent API usage, and clean development experience.

## Architecture

### Component Type Safety
- Fix icon component prop types to match Lucide React expectations
- Ensure all component props match their defined interfaces
- Remove invalid HTML attributes from SVG components

### Context API Consistency
- Align Navigation component with SidebarContext property names
- Ensure consistent property naming across context consumers
- Maintain backward compatibility where possible

### CSS Warning Mitigation
- Address vendor prefix compatibility warnings
- Maintain Tailwind CSS functionality while reducing noise

## Components and Interfaces

### LeaderboardUser Component
- **Issue**: CheckCircle icon receives invalid `title` prop
- **Solution**: Remove `title` prop and use proper accessibility attributes
- **Alternative**: Use tooltip component for hover information

### Navigation Component
- **Issue**: Accessing non-existent `isOpen` and `toggleSidebar` properties
- **Solution**: Use correct property names from SidebarContextType
- **Properties**: `isCollapsed` and `setIsCollapsed`

### SidebarContext
- **Current State**: Provides `isCollapsed` and `setIsCollapsed`
- **Usage Pattern**: Components should use these exact property names
- **Consistency**: All sidebar-related components should use same API

## Data Models

### SidebarContextType Interface
```typescript
interface SidebarContextType {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}
```

### Icon Component Props
- Lucide React icons accept standard SVG props
- Custom props like `title` should be replaced with `aria-label`
- Size and className are valid props

## Error Handling

### TypeScript Errors
- Fix prop type mismatches immediately
- Ensure all context property accesses are valid
- Maintain type safety throughout the application

### CSS Warnings
- Vendor prefix warnings are informational only
- Tailwind @-rules warnings are expected in development
- Focus on actual errors rather than framework warnings

## Testing Strategy

### Type Checking
- Run `tsc --noEmit` to verify no TypeScript errors
- Test component rendering with correct props
- Verify context property access works correctly

### Functionality Testing
- Ensure sidebar toggle functionality still works
- Verify icon accessibility is maintained
- Test that all components render without errors