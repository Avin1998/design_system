#!/bin/bash

# Quick start script for the Design System Component Showcase
echo "🎨 Setting up Design System Component Showcase..."

# Check if we're in the demo directory
if [ ! -f "ComponentShowcase.js" ]; then
    echo "❌ Error: Please run this script from the demo folder"
    echo "   Make sure ComponentShowcase.js exists in the current directory"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 Starting the showcase..."
    echo "   The demo will open in your browser at http://localhost:3000"
    echo ""
    echo "📋 What you'll see:"
    echo "   • All 43+ components with proper styling"
    echo "   • Atomic design structure (Atoms, Molecules, Organisms)"
    echo "   • Interactive examples with dummy data"
    echo "   • Proof that CSS import works correctly"
    echo ""
    echo "🔧 If components appear unstyled, check that this import is first:"
    echo "   import '@avinash_tyagi/design-system-react/lib/index.css';"
    echo ""
    
    # Start the development server
    npm start
else
    echo "❌ Failed to install dependencies"
    echo "   Try running 'npm install' manually"
    exit 1
fi