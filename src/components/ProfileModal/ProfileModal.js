import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpen,setModalOpen}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpen}
      onClose={()=>setModalOpen(false)}
    >
      <form className='infoForm'>
          <h3>Your info</h3>
          <div>
              <input type={"text"} className="infoInput" name="FirstName" placeholder="First Name" />
              <input type={"text"} className="infoInput" name="lastName" placeholder="Last Name" />
          </div>
          <div>
              <input type={"text"} className="infoInput" name="worksat" placeholder="Works at" />

          </div>
          <div>
              <input type={"text"} className="infoInput" name="livesin" placeholder="Lives in" />
              <input type={"text"} className="infoInput" name="country" placeholder="Country" />
          </div>
          <div>
              <input type={"text"} className="infoInput" name="worksat" placeholder="Relation Status" />

          </div>
          <div>
              Profile Image
              <input type={"file"} name="profileImg" />
                Cover Image
              <input type={"file"} name="coverImage" />

          </div>
          <button className='button infoButton'>Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal
