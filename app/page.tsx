"use client";

import React, { useState } from "react";
import { site } from "@/lib/config/site";

import {
  Heading,
  Text,
  Button,
  Icon,
  Input,
  Avatar,
  Textarea,
  Dialog,
  Background,
  useToast,
  Fade,
  TiltFx,
  HoloFx,
  Column,
  Row,
  LogoIcon, 
  ToggleButton,
  Flex,
  Chip
} from "@/components";
import Image from "next/image";

export default function Home() {
  const [theme, setTheme] = useState(site.theme);


  const [isFirstDialogOpen, setIsFirstDialogOpen] = useState(false);


  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Column fillWidth horizontal="center" flex={1}>
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: "4",
        }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />
      <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={3}>
        <Row
          data-border="rounded"
          horizontal="space-between"
          fillWidth
          paddingRight="64"
          paddingLeft="32"
          paddingY="20"
        >
          <Flex align="center" vertical="center" gap="4">
            <LogoIcon height="20" width="20" fill={theme === "dark" ? "#ffffff" : "#000000"} />
            <Text variant="body-default-lg" className={theme === "dark" ? "text-white" : "text-black"}>BranchDevs</Text>
          </Flex>
          <Flex gap="-1">
            {[
              theme === "dark" ? { label: "", value: "light", prefixIcon: "light" } : { label: "", value: "dark", prefixIcon: "dark" },
            ].map((button, index) => {
              return (
                <ToggleButton
                  selected={false}
                  variant="outline"
                  key={button.value}
                  onClick={(value) => setTheme(button.value as "light" | "dark")}
                  role="tab"
                  fillWidth={true}
                  size="md"
                  prefixIcon={button.prefixIcon}
                />
              );
            })}
          </Flex>
        </Row>
      </Row>
      
      <Column
        overflow="hidden"
        as="main"
        position="relative"
        horizontal="center"
        border="neutral-alpha-weak"
        fillWidth        
      >

        {/* HEADER */}
        <Column
          fillWidth
          horizontal="center"
          gap="48"
          radius="xl"
          paddingTop="80"
          position="relative"
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "neutral-alpha-medium",
              height: "0.25rem",
            }}
          />
          
          <Column fillWidth horizontal="center" gap="32" padding="32" position="relative"> 
            <Heading variant="display-strong-3xl" className="text-[var(--scheme-accent-500)]!">Branch<Text className="text-[var(--scheme-aqua-500)]">Devs</Text></Heading>           
          </Column>          
        </Column>

        {/* PROFILE */}
        <Row
          horizontal="center"
          paddingX="32"
          paddingBottom="32"
          paddingTop="64"
          fillWidth
          gap="32"
          position="relative"
          className="flex-col md:flex-row!"
        >
          <Background
            mask={{
              cursor: true,
            }}
            dots={{
              display: true,
              opacity: 50,
              color: "neutral-solid-strong",
              size: "48",
            }}
            fill
            position="absolute"
            gradient={{
              display: true,
              opacity: 100,
              tilt: 0,
              height: 100,
              width: 200,
              x: 50,
              y: 0,
              colorStart: "neutral-background-medium",
              colorEnd: "static-transparent",
            }}
          />
          <Column maxWidth={32} gap="-1">
            <Column                        
              background="page"
              radius="xl"
              bottomRadius="lg"
              overflow="hidden"
              position="relative"
              fill
              horizontal="center"
              border="neutral-medium"
            >
              <Image                                                                
                src="/images/header.jpg"
                alt="Profile background"
                width={800}
                height={300}
                style={{
                  aspectRatio: "16 / 4",
                  objectFit: "cover",
                  marginBottom: "-72px",
                }}
              />
              <Column    
                fill            
                paddingX="32"
                paddingBottom="32"
                fillWidth
                position="relative"
                horizontal="center"
                gap="8"
              >
                <Avatar
                  zIndex={1}
                  style={{
                    border: "8px solid var(--page-background)",
                  }}
                  size="xl"
                  src="/images/profile.jpg"
                />
                <Heading marginTop="24" as="h3" variant="display-default-md">
                  David van der Tak
                </Heading> 
                {/*}               
                <Text align="center" onBackground="neutral-weak" marginBottom="24">
                  info@branchdevs.com
                </Text>
                */}
                <Text align="center" onBackground="neutral-weak">
                  Experienced Full Stack Developer proficient in a variety of languages, frameworks, and services. Passionate about crafting efficient and scalable solutions to meet business needs. Committed to continuous learning and staying updated with industry trends.
                </Text>
                <Flex
                  style={{
                    margin: "calc(-1 * var(--static-space-8)) var(--static-space-8)",
                  }}
                  direction="row"
                  gap="4"
                  vertical="center"
                  horizontal="center"
                  wrap
                  paddingY="16"
                  className="mt-auto!"
                >
                  {["Typescript", "Javascript", "NodeJS", "React", "NestJS", "NextJS", "SQL", "NoSQL", "MySQL", "AWS Lambda","AWS Amplify","AWS App Runner", "AWS DynamoDB", "AWS S3","PHP", "Laravel"].map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}                      
                    />
                  ))}
                </Flex>              
              </Column>
            </Column>
          </Column>
          <Column
            border="neutral-alpha-weak"
            paddingX="32"
            radius="xl"
            overflow="hidden"
            paddingY="64"
            fillWidth
            position="relative"
          >
            <Background
              mask={{
                x: 100,
                y: 0,
              }}
              position="absolute"
              grid={{
                display: true,
                color: "neutral-alpha-medium",
                width: "2rem",
                height: "2rem",
              }}
            />
            <Background
              mask={{
                x: 0,
                y: 100,
                radius: 100,
              }}
              position="absolute"
              grid={{
                display: true,
                color: "brand-alpha-strong",
                width: "12",
                height: "12",
              }}
              gradient={{
                display: true,
                opacity: 100,
                height: 100,
                width: 100,
                tilt: 0,
                x: 0,
                y: 100,
                colorStart: "brand-solid-strong",
                colorEnd: "brand-background-medium",
              }}
            />
            <Column horizontal="center" vertical="center" gap="48" fillWidth position="relative">
              <Heading align="center" as="h2" variant="display-default-xl">Introduction</Heading>              
              <div className="w-full neutral-on-background-strong">
                <p>I'm David van der Tak — a Senior Software Engineer passionate about building scalable, efficient, and future-proof web platforms. With over a decade of full-stack development experience, I specialize in transforming complex business needs into clean, performant code.</p>
                <p>I have lead technology strategy and development for high-impact e-commerce projects. From architecting APIs with NestJS and Node.js to crafting modern UIs with React and Next.js, I bring deep technical expertise and a strong product mindset to every build. I thrive in cross-functional teams, where I can bridge communication between technical and non-technical stakeholders to ship solutions that truly move the needle.</p>
                <p>Before that, I developed a proprietary Event Management System used for large-scale events, engineered custom WordPress plugins to automate workflows, and led multi-platform transitions from PHP/Laravel stacks to modern JavaScript ecosystems.</p>
                <p>What drives me? A genuine love for problem-solving, continuous learning, and delivering technology that works as hard as the people who rely on it.</p>
                <p>Core strengths:<br/>TypeScript, PHP, React, Laravel, NodeJS, NestJS, NextJS, SQL/NoSQL (MySQL, DynamoDB), AWS Lambda, scalable architecture, and performance optimization.</p>
              </div>
              <Heading align="center" as="h3" variant="display-default-xl">Let’s build something thoughtful, functional, and future-ready.</Heading>
            </Column>
          </Column>
        </Row>

        {/* CASE STUDIES */} 
        <Row
          horizontal="center"
          paddingX="32"
          paddingBottom="64"
          paddingTop="32"
          fillWidth
          gap="32"
          position="relative"
          className="flex-col"
        >
          <Column><Heading align="center" as="h2" variant="display-default-2xl">A few case studies</Heading></Column>  
          <Column fillWidth>             
            <Row
              horizontal="center"
              fillWidth
              gap="32"
              position="relative"
              className="flex-col md:flex-row!"
            >          
              <Column
                fill
                horizontal="center"
                position="relative"
              >
                <TiltFx
                  fill
                  radius="xl"
                  border="accent-alpha-weak"
                  overflow="auto"
                >
                  <HoloFx fill>
                    <Background
                      fill
                      gradient={{
                        display: true,
                        tilt: -45,
                        height: 150,
                        width: 100,
                        x: 75,
                        y: -50,
                        colorStart: "brand-solid-strong",
                        colorEnd: "accent-solid-weak",
                      }}
                    >
                      <Column
                        fill
                        position="relative"
                        padding="24"
                        vertical="center"
                        gap="12"
                        onSolid="neutral-strong"
                      >
                        <p>TeamSeas, led by YouTube creators MrBeast and Mark Rober, set out to raise $30 million to remove plastic from the ocean. With just 23 days to launch, they needed a system that could handle extreme traffic, process every donation seamlessly, and ensure accurate, real-time tracking of every dollar.</p>
                        <p>Built a scalable, high-performance tracking system that ensured every donation was accounted for, attributed correctly, and visible in real-time.</p>
                        <ul className="list-disc">
                          <li>Designed a first-party tracking system to process donations instantly with zero data loss.</li>
                          <li>Integrated multiple payment platforms with real-time tracking dashboards.</li>
                          <li>Provided accurate attribution to measure campaign performance and optimize outreach.</li>
                        </ul>
                      </Column>
                    </Background>
                  </HoloFx>
                </TiltFx>
              </Column>
              <Column
                fill
                horizontal="center"
                position="relative"
              >
                <TiltFx
                  fill
                  radius="xl"
                  border="accent-alpha-weak"
                  overflow="auto"
                >
                  <HoloFx fill>
                    <Background
                      fill
                      gradient={{
                        display: true,
                        tilt: -45,
                        height: 150,
                        width: 100,
                        x: 75,
                        y: -50,
                        colorStart: "brand-solid-strong",
                        colorEnd: "accent-solid-weak",
                      }}
                    >
                      <Column
                        fill
                        position="relative"
                        padding="24"
                        vertical="center"
                        gap="12"
                        onSolid="neutral-strong"
                      >
                        <p>Chris Beat Cancer had a growing audience but struggled with messy tracking, inaccurate affiliate attribution, and poor audience segmentation.</p>                      
                        <p>implemented a clean tracking system and optimized segmentation strategies to drive more precise marketing and revenue attribution.</p>
                        <ul className="list-disc">
                          <li>Increased affiliate tracking accuracy by 65% with custom attribution models.</li>
                          <li>Automated audience segmentation for targeted, high-converting campaigns.</li>
                          <li>Implemented first-party tracking dashboards for clearer performance insights.</li>
                        </ul>
                      </Column>
                    </Background>
                  </HoloFx>
                </TiltFx>
              </Column>
            </Row>
          </Column>
          <Column fillWidth>             
            <Row
              horizontal="center"
              fillWidth
              gap="32"
              position="relative"
              className="flex-col md:flex-row!"
            >          
              <Column
                fill
                horizontal="center"
                position="relative"
              >
                <TiltFx
                  fill
                  radius="xl"
                  border="accent-alpha-weak"
                  overflow="auto"
                >
                  <HoloFx fill>
                    <Background
                      fill
                      gradient={{
                        display: true,
                        tilt: -45,
                        height: 150,
                        width: 100,
                        x: 75,
                        y: -50,
                        colorStart: "brand-solid-strong",
                        colorEnd: "accent-solid-weak",
                      }}
                    >
                      <Column
                        fill
                        position="relative"
                        padding="24"
                        vertical="center"
                        gap="12"
                        onSolid="neutral-strong"
                      >
                        <p>Network Marketing Pro was gearing up for high-growth virtual events, but their systems weren’t built to keep up. We worked closely with them to continuously refine and optimize their event infrastructure.</p>
                        <p>Built a high-performance, event-ready system to handle massive audiences, maximize conversions, and ensure revenue accuracy.</p>
                        <ul className="list-disc">
                          <li>Created a custom affiliate tracking system for accurate sales attribution & payouts.</li>
                          <li>Optimized sales funnels to reduce friction & increase conversions.</li>
                          <li>Designed a scalable event framework to handle high traffic with zero downtime.</li>
                        </ul>
                      </Column>
                    </Background>
                  </HoloFx>
                </TiltFx>
              </Column>
              <Column
                fill
                horizontal="center"
                position="relative"
              >
                <TiltFx
                  fill
                  radius="xl"
                  border="accent-alpha-weak"
                  overflow="auto"
                >
                  <HoloFx fill>
                    <Background
                      fill
                      gradient={{
                        display: true,
                        tilt: -45,
                        height: 150,
                        width: 100,
                        x: 75,
                        y: -50,
                        colorStart: "brand-solid-strong",
                        colorEnd: "accent-solid-weak",
                      }}
                    >
                      <Column
                        fill
                        position="relative"
                        padding="24"
                        vertical="center"
                        gap="12"
                        onSolid="neutral-strong"
                      >
                        <p>The Spa Dr set out to launch a high-impact docuseries while preparing for an eventual acquisition. To maximize engagement and revenue, they needed a system that could handle video scheduling, affiliate tracking, and secure sales seamlessly.</p>                      
                        <p>Implemented a scalable, acquisition-ready system that supported the launch, maximized conversions, and ensured an easy transition post-acquisition.</p>
                        <ul className="list-disc">
                          <li>Integrated video scheduling automation, allowing the docuseries to launch effortlessly.</li>
                          <li>Built seamless affiliate tracking to ensure accurate revenue attribution and partner payouts.</li>
                          <li>Optimized secure sales pages with adaptive upsell functionality to increase average order value.</li>
                        </ul>
                      </Column>
                    </Background>
                  </HoloFx>
                </TiltFx>
              </Column>
            </Row>
          </Column>
          <Column fillWidth>  
            <Row
              horizontal="center"
              fillWidth
              gap="32"
              position="relative"
              className="flex-col md:flex-row!"
            >          
              <Column
                fill
                horizontal="center"
                position="relative"
              >
                <TiltFx
                  fill
                  radius="xl"
                  border="accent-alpha-weak"
                  overflow="auto"
                >
                  <HoloFx fill>
                    <Background
                      fill
                      gradient={{
                        display: true,
                        tilt: -45,
                        height: 150,
                        width: 100,
                        x: 75,
                        y: -50,
                        colorStart: "brand-solid-strong",
                        colorEnd: "accent-solid-weak",
                      }}
                    >
                      <Column
                        fill
                        position="relative"
                        padding="24"
                        vertical="center"
                        gap="12"
                        onSolid="neutral-strong"
                      >
                        <p>DappzSports was preparing for rapid growth but their e-commerce platform wasn’t built to handle surging demand. Build a robust, scalable system designed to maximize sales and deliver a seamless shopping experience.</p>
                        <p>Developed a high-performance e-commerce platform built to support high traffic, optimize conversions, and ensure accurate order processing.</p>
                        <ul className="list-disc">
                          <li>Optimized the sales funnel by reducing friction points, improving checkout flow, and increasing conversion rates.</li>
                          <li>Designed a scalable infrastructure to handle peak traffic spikes with zero downtime and fast page load times.</li>
                        </ul>
                      </Column>
                    </Background>
                  </HoloFx>
                </TiltFx>
              </Column>
              <Column
                fill
                horizontal="center"
                position="relative"
              >
                <TiltFx
                  fill
                  radius="xl"
                  border="accent-alpha-weak"
                  overflow="auto"
                >
                  <HoloFx fill>
                    <Background
                      fill
                      gradient={{
                        display: true,
                        tilt: -45,
                        height: 150,
                        width: 100,
                        x: 75,
                        y: -50,
                        colorStart: "brand-solid-strong",
                        colorEnd: "accent-solid-weak",
                      }}
                    >
                      <Column
                        fill
                        position="relative"
                        padding="24"
                        vertical="center"
                        gap="12"
                        onSolid="neutral-strong"
                      >
                        <p>iEvents.com needed a scalable, streamlined solution to manage their large-scale, recurring events seamlessly. </p>
                        <p>Engineered a proprietary Event Management System (EMS) tailored to their unique operational challenges — enabling efficient planning, execution, and tracking of major events like July 4th, Halloween, and New Year’s Eve.</p>
                        <p>Delivered a fully integrated event management platform that automated workflows, improved operational efficiency, and strengthened digital presence.</p>
                        <ul className="list-disc">
                          <li>Engineered a comprehensive EMS to centralize event operations, sales tracking, reporting, and staffing functions.</li>
                          <li>Developed and maintained a WordPress multisite network for the corporate website and diverse event categories, ensuring consistent branding and user experience.</li>
                          <li>Built a custom WordPress plugin to connect the EMS with the multisite network, automating event propagation and streamlining promotion efforts.</li>
                          <li>Automated content and event updates across the WordPress multisite, reducing manual labor and minimizing errors.</li>
                        </ul>
                      </Column>
                    </Background>
                  </HoloFx>
                </TiltFx>
              </Column>
            </Row>
          </Column>
        </Row>

        <Row
          position="relative"
          as="footer"
          fillWidth
          paddingX="lg"
          paddingTop="128"
          paddingBottom="80"
        >
          <Background
            borderTop="brand-alpha-strong"
            mask={{
              x: 50,
              y: 0,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "brand-alpha-strong",
              height: "0.25rem",
            }}
          />
          <Column
            position="relative"
            textVariant="body-default-xs"
            onBackground="neutral-medium"
            horizontal="center"
            align="center"
            fillWidth
            gap="16"
          >
            <LogoIcon height="50" width="50" fill={theme === "dark" ? "#ffffff" : "#000000"} />
            <Text size="sm" className={theme === "dark" ? "text-white" : "text-black"}>&copy; {(new Date).getFullYear()} / {site.name}</Text>           
          </Column>
        </Row>
      </Column>

      <Dialog
        isOpen={isFirstDialogOpen}
        onClose={() => setIsFirstDialogOpen(false)}
        title="Find Me"
        description="find me anywhere and everywhere"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsFirstDialogOpen(false)}>
              Close
            </Button>
          </>
        }
      >
        <></>        
      </Dialog>      
    </Column>
  );
}