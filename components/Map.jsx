import {StyleSheet, Text, TouchableOpacity} from "react-native";
import MapView, {Marker} from "react-native-maps";

export default function Map({coordinates}) {
    return (
        <TouchableOpacity onPress={()=>{}}>
            <MapView style={styles.maps} region={coordinates}>
                <Marker coordinate={coordinates} title={coordinates.title}/>
                <Text>{coordinates.title}</Text>
            </MapView>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    maps: {
        marginVertical:10,
        height:200,
        width:"100%",
        borderRadius:12
    }
})
