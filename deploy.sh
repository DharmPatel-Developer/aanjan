#!/bin/bash

# Netlify Deployment Script for Aanjan Samaj React App
# This script builds and deploys the React application to Netlify

set -e  # Exit on any error

echo "🚀 Starting Netlify deployment process..."

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI is not installed. Installing it now..."
    npm install -g netlify-cli
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf build/

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run tests (optional - uncomment if you want to run tests before deployment)
# echo "🧪 Running tests..."
# npm test -- --coverage --ci --silent --passWithNoTests

# Build the application
echo "🔨 Building the application..."
npm run build

# Deploy to Netlify
echo "🌐 Deploying to Netlify..."

# Check if this is a production deployment
if [[ "$1" == "prod" || "$1" == "production" ]]; then
    echo "📋 Deploying to production..."
    netlify deploy --prod --dir=build
else
    echo "🔍 Deploying to preview..."
    netlify deploy --dir=build
fi

echo "✅ Deployment completed successfully!"
echo "🔗 Check your Netlify dashboard for the deployment URL"