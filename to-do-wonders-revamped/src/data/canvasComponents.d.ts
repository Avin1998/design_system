// TypeScript definitions for canvas components data

export interface CanvasComponent {
  id: string;
  name: string;
  icon: string;
  category: string;
  color: string;
  description: string;
}

export interface ComponentCategory {
  id: string;
  name: string;
  color: string;
}

export declare const canvasComponents: CanvasComponent[];
export declare const componentCategories: ComponentCategory[];