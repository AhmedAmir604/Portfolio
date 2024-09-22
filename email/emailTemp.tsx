import React from "react";
import {
  Body,
  Html,
  Head,
  Container,
  Hr,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type props = {
  message: string;
  email: string;
};

export default function EmailTemplate({ message, email }: props) {
  return (
    <Html>
      <Head />
      <Preview>New Message from Portfolio Site</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md text-center">
              <Head className="leading-tight text-xl">
                Your received the following message:{" "}
              </Head>
              <Text>{message}</Text>
              <Hr />
              <Text>the sender email is {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
