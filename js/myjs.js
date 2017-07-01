/**
 * Created by yujin on 17-6-26.
 */
function selectroadbyvalue() {

    var map = new BMap.Map("mapbox");
    var start = "天安门";
    var end = "百度大厦";
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    //三种驾车策略：最少时间，最短距离，避开高速
    var routePolicy = [BMAP_DRIVING_POLICY_LEAST_TIME,BMAP_DRIVING_POLICY_LEAST_DISTANCE,BMAP_DRIVING_POLICY_AVOID_HIGHWAYS];
    $("#result").click(function(){
        map.clearOverlays();
        var i=$("#dx").val();

        search(start,end,routePolicy[i]);
        function search(start,end,route){
            var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true},policy: route});
            driving.search(start,end);
        }
    });

}
function  dad() {
    var dw

}
