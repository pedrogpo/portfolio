/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button, Input, Text, Title } from '~/components/atoms'
import * as S from './styles'
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  message: string
}

export default function Contact() {
  const { t } = useTranslation('contact')

  const categories: any[] = t('contact.form.items', { returnObjects: true })
  const [activeCategory, setActiveCategory] = useState(0)

  const { register, handleSubmit, watch } = useForm<FormData>()
  const onSubmit = handleSubmit((data) => {
    window.location.href = `
      mailto:contact@pedrogui.com&subject=${data.message}
    `
  })

  return (
    <S.Contact>
      <Container>
        <Row className="gy-5">
          <Col lg={6}>
            <S.Content>
              <S.ContentHead>
                <Title size="xl" weight="bold" color="gray_100">
                  {t('contact.title')}
                </Title>
                <Text size="xl" weight="medium" color="gray_300">
                  {t('contact.subtitle')}
                </Text>
              </S.ContentHead>
              <S.ContentBody>
                <Text size="l" weight="medium" color="gray_300">
                  {t('contact.contact_text')}
                  <br />
                  contact@pedrogui.com
                </Text>
              </S.ContentBody>
            </S.Content>
          </Col>
          <Col lg={6}>
            <S.FormContainer onSubmit={onSubmit}>
              <Text size="xl" weight="medium" color="gray_400">
                {t('contact.form.title')}
              </Text>
              <S.FormChooseCategory>
                {categories.map((category, index) => (
                  <S.FormChooseCategoryItem
                    key={index}
                    active={activeCategory === index}
                    onClick={() => setActiveCategory(index)}
                  >
                    {category.text}
                  </S.FormChooseCategoryItem>
                ))}
              </S.FormChooseCategory>
              <S.FormInputs>
                <Input
                  sizeOf="l"
                  background="background_800"
                  placeholder={t('contact.form.name') || 'Seu nome'}
                  {...register('name')}
                  required
                />
                {/* <Input
                  sizeOf="l"
                  background="background_800"
                  placeholder={t('contact.form.email') || 'Seu Email'}
                  {...register('email')}
                  type="email"
                  required
                /> */}
                <Input
                  as="textarea"
                  sizeOf="l"
                  background="background_800"
                  placeholder={
                    t('contact.form.message') || 'Fale mais sobre seu projeto.'
                  }
                  {...register('message')}
                  required
                />
              </S.FormInputs>
              <Button padding=".75rem 1.5rem" size="m" weight="bold" fill="white">
                {t('contact.form.button')}
              </Button>
            </S.FormContainer>
          </Col>
        </Row>
      </Container>
    </S.Contact>
  )
}
