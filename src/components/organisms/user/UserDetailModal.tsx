/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react';
import { FC, memo, useCallback, useContext, useEffect, useState } from 'react';
import { AllUserContext } from '../../../providers/AllUserProvider';
import { User } from '../../../types/api/user';
import { PrimaryButton } from '../../atoms/PrimaryButton';

type Props = {
  user: User | undefined;
  isOpen: boolean;
  onClose: () => void;
  isAdmin: boolean;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, isOpen, onClose, isAdmin } = props;
  const [username, setUserName] = useState<User['username'] | ''>('');
  const [name, setName] = useState<User['name'] | ''>('');
  const [email, setEmail] = useState<User['email'] | ''>('');
  const [phone, setPhone] = useState<User['phone'] | ''>('');
  const { allUsers, setAllUsers } = useContext(AllUserContext);

  useEffect(() => {
    setName(user?.username ?? '');
    setName(user?.name ?? '');
    setEmail(user?.name ?? '');
    setPhone(user?.phone ?? '');
  }, [user]);

  const onClickUpdateUserInfo = useCallback(() => {
    const targetUserId = user?.id;
    if (targetUserId === undefined) return;
    if (
      username !== undefined &&
      name !== undefined &&
      email !== undefined &&
      phone !== undefined
    ) {
      setAllUsers(
        allUsers.map((user) => {
          return user.id === targetUserId ? { ...user, username, name, email, phone } : user;
        })
      );
    }
  }, []);

  console.log(allUsers);

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent p={4}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={username}
                isReadOnly={!isAdmin}
                onChange={(e) => setUserName(e.target.value)}
              />
              <FormLabel>フルネーム</FormLabel>
              <Input value={name} isReadOnly={!isAdmin} onChange={(e) => setName(e.target.value)} />
              <FormLabel>MAIL</FormLabel>
              <Input
                value={email}
                isReadOnly={!isAdmin}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel>TEL</FormLabel>
              <Input
                value={phone}
                isReadOnly={!isAdmin}
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && <ModalFooter>
          <PrimaryButton onClick={onClickUpdateUserInfo}>
            Update
          </PrimaryButton>
        </ModalFooter>}
      </ModalContent>
    </Modal>
  );
});
