# Data Refactoring Summary

This document outlines the centralization of hardcoded data into a dedicated `data/` folder.

## Centralized Data Files

### 1. **data/navLinks.ts**
Contains navigation links used across multiple components.
- **Used in:** `Navbar.tsx`, `Footer.tsx`
- **Function:** `getNavLinks(locale: string)` - returns locale-specific navigation links
- **Links:** Home, Manifesto, News, Gallery

### 2. **data/socialLinks.ts**
Contains social media platform links.
- **Used in:** `Footer.tsx`
- **Links:** Facebook, Twitter, Instagram, YouTube
- **Note:** Imports lucide-react icons directly

### 3. **data/wards.ts**
Contains list of all six wards in Mumias West.
- **Used in:** `FeedbackSection.tsx`
- **Wards:** Lusheya/Lubinu, East Wanga, Marama Central, Marama East, Marama North, Marama West

### 4. **data/manifestoPillars.ts**
Contains comprehensive manifesto data with full pillar details.
- **Used in:** `ManifestoHighlights.tsx`, `app/[locale]/manifesto/page.tsx`
- **Data includes:**
  - Icon (lucide-react component)
  - Number (01-05)
  - Title
  - Subtitle
  - Description
  - Array of points/commitments
- **Pillars:** Agriculture, Education, Health, Infrastructure, Youth & Women

### 5. **data/newsItems.ts**
Contains all news/campaign articles.
- **Used in:** `RecentNews.tsx`, `app/[locale]/news/page.tsx`
- **Data includes:**
  - Image path
  - Category
  - Date
  - Slug (for routing)
  - Title
  - Excerpt
- **Note:** RecentNews shows first 3 items, News page shows all 5

## Updated Components

| Component | Changes | Data File |
|-----------|---------|-----------|
| `Navbar.tsx` | Imports `getNavLinks()` | navLinks.ts |
| `Footer.tsx` | Imports `getNavLinks()` and `socialLinks` | navLinks.ts, socialLinks.ts |
| `ManifestoHighlights.tsx` | Imports `manifestoPillars`, uses in mapping | manifestoPillars.ts |
| `RecentNews.tsx` | Imports `newsItems`, displays first 3 | newsItems.ts |
| `FeedbackSection.tsx` | Imports `wards` | wards.ts |
| `app/[locale]/manifesto/page.tsx` | Imports `manifestoPillars`, uses twice (quicklinks + display) | manifestoPillars.ts |
| `app/[locale]/news/page.tsx` | Imports `newsItems` | newsItems.ts |

## Benefits

✅ **Single Source of Truth:** Update data in one place, reflects everywhere  
✅ **Easier Maintenance:** Content updates don't require component changes  
✅ **Better Organization:** Separation of data and presentation logic  
✅ **DRY Principle:** Eliminates duplicate data across components  
✅ **Scalability:** Simple to add new items or modify existing ones  

## Migration Notes

- All imports use `@/data/` path alias
- Navigation links are generated dynamically with locale parameter
- Icon components are imported directly in data files (Lucide React)
- No breaking changes to component interfaces
- All components maintain their original functionality and styling
