# Tiles middleware station
Proxy server for map-tiles services with additional features. 
It is useful for clients that have no direct internet access (for ex. corporate networks). 

## Install and run
```
npm install
npm run build-server
npm run build-client     #optional
npm run start
```

## Testing map client
To try the tile server go to `http://localhost:4000/map/`

## Using
Use tile server url like this `http://localhost:4000/tiles/{s}.tile.stamen.com/toner/{z}/{x}/{y}.png?__protocol=http`
it will get `http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png` tile 

## Additional query params
* `__protocol` - `[http|https]` (`http` - default) - protocol for tile server
* `__nocache-primary` - `[true|false]` (`false` - default) - Try get tile image from original source first and if it will be unavailable - use cached copy    
* `__nocache-only` - `[true|false]` (`false` - default) - Don't use cache source and always get tile image from original source.
* `__filter` - `[gs|border]` - use tile image filter (can be an array).
    * `gs` - gray-scale filter.
    * `border` - draw tiles border.
    
## Example url
```
http://localhost:4000/tiles/{s}.tile.stamen.com/toner/{z}/{x}/{y}.png?__protocol=http&__nocache-primary=true
http://localhost:4000/tiles/vec03.maps.yandex.net/tiles?l=map&v=4.127.2&x={x}&y={y}&z={z}&scale=1&lang=ru_RU&__protocol=https
```
