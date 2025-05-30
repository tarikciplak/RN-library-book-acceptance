import React, { useCallback, useRef } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Camera, useCameraDevices, } from 'react-native-vision-camera';
import tw from '../Tailwind';
import { GradientCameraIcon, CloseIcon } from './Icon';

interface CameraModalProps {
  isVisible: boolean;
  onClose: () => void;
  onPictureTaken: (uri: string) => void;
}

const CameraModal: React.FC<CameraModalProps> = ({ isVisible, onClose, onPictureTaken }) => {

  const cameraRef = useRef(null);

  const { front } = useCameraDevices('wide-angle-camera');

  const takePhoto = useCallback(
    async () => {
      if (cameraRef.current) {

        try {
          const photo = await cameraRef.current.takePhoto({
            quality: 100,
            encoding: 'jpeg',
            base64: true,
            enableAutoStabilization: true
          });

          onPictureTaken(photo);

        } catch (error) {
          console.error('Fotoğraf çekilirken bir hata oluştu:', error);
        }
      }
    }, []
  )


  return (
    <Modal visible={isVisible}>
      <View style={styles.container}>
        {front &&
          (
            <Camera orientation={'portrait'} style={tw`flex-1`} ref={cameraRef} device={front} photo={true} isActive={true} />
          )
        }

        <TouchableOpacity style={tw`h-[84px] w-[84px] p-1.5 rounded-full border-2 border-white-900 absolute bottom-6`} onPress={takePhoto}>
          <View style={tw`bg-white-900 w-full h-full rounded-full flex items-center justify-center`}>
            <GradientCameraIcon className="h-[30px] w-[30px]" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose} style={tw`absolute top-10 right-6`}>
          <CloseIcon className="w-8 h-8 text-white-900" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
  },
});

export default CameraModal;
