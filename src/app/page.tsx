import ModalDemo from "@/components/ModalDemo";
import NotificationDemo from "@/components/NotificationDemo";
import { Button, Flex, Stack, Text, Title } from "@mantine/core";
import Link from "next/link";

const Page = () => {
  return (
    <Stack justify="center" align="center" my="xl">
      <Title>Next + Mantine | Template</Title>
      <Flex justify="center" align="center" gap={20}>
        <NotificationDemo />
        <ModalDemo />
      </Flex>
    </Stack>
  );
};

export default Page;
