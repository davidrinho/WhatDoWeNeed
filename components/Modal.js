import { TextInput } from "react-native";





const Modal = ({barcode}) => {
    return (
        <View>
            <TextInput aria-disabled={true}>{barcode}</TextInput>
        </View>
    )
}


export default Modal;