import { useStationData } from "@/stores/data";

export function geocoder(pt: object) {
    const stationData = useStationData();
    const geoc = new BMapGL.Geocoder();
    geoc.getLocation(pt, function (rs: any) {
        let addComp = rs.addressComponents;
        stationData.stationData.address = `${addComp.city} ${addComp.district} ${addComp.street} ${addComp.streetNumber}`;
    });
}
