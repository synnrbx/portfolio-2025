import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://danielpetho.com`;

export const WelcomeEmail = ({ email }: { email: string }) => (
  <Html style={{ width: "100%" }}>
    <Head />
    <Body style={main}>
      <Preview>welcome</Preview>
      <Container style={container}>
        <Section style={box}>
          <Text style={paragraph}>Hi Friend,</Text>

          <Text style={paragraph}>
            Thanks for subscribing to my newsletter! I'll be sending out emails
            at least once a month with newsletter-only content, updates on my
            work, updates on fancy components, and occasional thoughts about
            design and tech.
          </Text>

          <Text style={paragraph}>
            A few things I'm currently working on and what you can expect in
            future updates:
          </Text>

          <Text style={header}>Fancy Components</Text>

          <Link
            href="https://fancycomponents.dev"
            style={{ textDecoration: "none" }}
          >
            <Img
              src={`${baseUrl}/img/fancy.jpg`}
              width="100%"
              height="auto"
              alt="Fancy Components Preview"
              style={{ marginBottom: "16px" }}
            />
          </Link>
          <Text style={paragraph}>
            Fancy Components is a playground where I [re]create experimental ui
            components and funky microinteractions. Each component comes with
            source code and detailed write-ups about the implementation process.
          </Text>
          <Text style={paragraph}>
            Everything is open source and also available on{" "}
            <Link href="https://github.com/danielpetho/fancy">
              GitHub
            </Link>
            .
          </Text>

          <Text style={header}>unbaited</Text>

          <Text style={paragraph}>
            <Link href="https://unbaited.danielpetho.com">
              unbaited
            </Link>{" "}
            is a browser extension that helps clean up your X
            feed by filtering out engagement bait posts using AI. The project is
            fully open-source and available on{" "}
            <Link href="https://github.com/danielpetho/unbaited">
              GitHub
            </Link>
            .
          </Text>

          <Text style={paragraph}>
            While currently focused on X, there are requests to extend support
            to other platforms as well. Contributions are very much welcomed!
          </Text>

          <Text style={header}>Socials</Text>

          <Text style={paragraph}>
            You can also find me posting ui, motion & other tech experiments
            regularly on{" "}
            <Link href="https://x.com/nonzeroexitcode">
              X
            </Link>
            ,{" "}
            <Link href="https://threads.net/@nonzeroexitcode">
              Threads
            </Link>
            , and{" "}
            <Link
              href="https://bsky.app/profile/danielpetho.com"
            >
              Bluesky
            </Link>
            .
          </Text>

          <Section style={signature}>
            <Text style={paragraph}>looking forward to sharing more</Text>
            <Text style={paragraph}>— daniel</Text>
          </Section>

          <Hr style={hr} />

          <Section style={reply}>
            <Text>
              if you have questions, or want to say hi, feel free to contact me
              at{" "}
              <Link href="emailto:hi@danielpetho.com">
                hi@danielpetho.com
              </Link>
              .
            </Text>
          </Section>

          <Text style={footer}>
            You're seeing this email because you've opted in to receive updates
            from danielpetho.com.
          </Text>
          <Text style={footer}>
            <Link
              href={`${baseUrl}/api/unsubscribe?email=${email}`}
              style={{
                fontWeight: "bold",
                color: "#999",
                textDecoration: "none",
              }}
            >
              UNSUBSCRIBE
            </Link>
          </Text>
          <Text style={footer}>Nuremberg, Germany</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  width: "100%",
  margin: 0,
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  padding: "20px 0 48px",
  width: "100%",
  maxWidth: "800px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
  margin: 0,
};

const hr = {
  borderColor: "#eee",
  margin: "20px 0",
};

const header = {
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "32px",
  marginBottom: "16px",
  textAlign: "left" as const,
  color: "#000000",
};

const paragraph = {
  color: "#333",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const signature = {
  marginTop: "32px",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const reply = {
  marginTop: "32px",

  fontSize: "12px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const footer = {
  textDecoration: "none",
  color: "#999",
  fontSize: "12px",
  lineHeight: "16px",
};
