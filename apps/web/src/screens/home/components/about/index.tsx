/* eslint-disable react/no-unescaped-entities */
import { Col, Container, Row } from 'react-bootstrap'
import { Button, Text, Title } from '~/components/atoms'
import Card from './card'
import * as S from './styles'

export default function About() {
  return (
    <S.About>
      <Container>
        <Row>
          <Col>
            <S.Head>
              <Title size="l" weight="bold" color="gray_100">
                How can I help with your {''}
                <Text as="span" color="primary_500">
                  project
                </Text>
                ?
              </Title>
              <Text size="l" weight="medium" color="gray_300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </Text>
            </S.Head>
          </Col>
        </Row>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <Card
              iconSrc="/icons/web.svg"
              title="Web Developer"
              description="I utilize the latest technologies and development methodologies to bring your ideas and designs to life in the form of dynamic and user-friendly web applications. I am committed to delivering high-quality results that exceed your expectations and drive real results for your business."
            />
          </Col>
          <Col lg={4} md={6}>
            <Card
              iconSrc="/icons/uiux.svg"
              title="UI/UX Designer"
              description="I help bring user-centered design to life by creating interfaces that are both aesthetically pleasing and highly functional. I have a deep understanding of design principles, user research, and prototyping tools to ensure that your project is both visually appealing and user-friendly."
            />
          </Col>
          <Col lg={4} md={6}>
            <Card
              iconSrc="/icons/software.svg"
              title="Software developer"
              description="I bring your ideas to life by building custom software applications that meet your unique needs. I have experience in multiple programming languages and development methodologies, and I can help you design, build, and launch a software product that exceeds your expectations."
            />
          </Col>
          <Col lg={4} md={6}>
            <Card
              iconSrc="/icons/idea.svg"
              title="Business Strategies/Management"
              description="Elevate your business to new heights with my strategic approach to management and planning. I can help you identify growth opportunities, streamline processes, and develop innovative solutions to drive success and achieve your business goals."
            />
          </Col>
          <Col lg={4} md={6}>
            <Card
              iconSrc="/icons/seo.svg"
              title="Search Engine Optimization (SEO)"
              description="Take your online presence to the next level with my expert SEO strategies. I specialize in utilizing keyword research, content optimization, and link building to drive organic traffic and increase your visibility, helping you reach and connect with your target audience."
            />
          </Col>
          <Col lg={4} md={6}>
            <S.ContactCard>
              <S.ContactCardHead>
                <Title size="xs" weight="bold" color="gray_100">
                  Interested in working together?
                </Title>
                <Text size="s" weight="medium" color="gray_400">
                  Let's talk about your project or idea and find out how I can help you
                  achieve your goals.
                </Text>
              </S.ContactCardHead>
              <Button boxShadow padding=".5rem 1rem" size="s" weight="semibold">
                Contact me
              </Button>
            </S.ContactCard>
          </Col>
        </Row>
      </Container>
    </S.About>
  )
}
