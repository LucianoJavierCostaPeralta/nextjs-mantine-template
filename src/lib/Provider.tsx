"use client";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { RootStyleRegistry } from "./emotion/EmotionRootStyleRegistry";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootStyleRegistry>
      <MantineEmotionProvider>
        <MantineProvider stylesTransform={emotionTransform}>
          <Notifications />
          <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
      </MantineEmotionProvider>
    </RootStyleRegistry>
  );
}

export default Providers;
