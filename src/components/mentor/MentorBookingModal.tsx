import Modal from '../shared/Modal';


interface MentorBookingModalProps {
    open: boolean;
    onClose: () => void;
}


const MentorBookingModal = ({open, onClose}:MentorBookingModalProps) => {


    return(
        <Modal open={false} onClose={onClose} title={'Some Title'} children={<></>}/>
    );

};


export default MentorBookingModal;