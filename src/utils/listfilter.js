export const listFilter = (json, useFeatured, displayCount) => json.filter( 
    (value, index) => ((useFeatured && value.featured) 
        || (!useFeatured && (!displayCount || index < displayCount))))