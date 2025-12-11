import { Card, CardActionArea, CardActions, CardContent, CardHeader, Chip, Fade, Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import { RepoForkedIcon, RepoIcon, StarIcon } from '@primer/octicons-react';
import Image from 'next/image'
import { useRef } from "react";
import useAnimate from "./useAnimate";


const projects = [
     {
    name: 'InRave Studio — сайт для сети спортивных клубов',
    html_url: 'https://inrave.studio/',
    stars: null,
    forks: null,
    short: 'Я полностью переписал и перезапустил сайт сети спортивных залов, добавив анимации и интерактив.',
    description: (
      <>
        <Typography variant="body2" color="textSecondary" component="p">
          Я переписал фронтенд в FSD-архитектуре, добавил анимации, галереи и динамичные блоки, подключил бэкенд на FastAPI
          и оптимизировал загрузку и адаптивность. Сайт стал масштабируемым и визуально современным.
        </Typography>
      </>
    ),
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'FastAPI', 'Swiper.js', 'FSD'],
  },
  {
    name: 'Siveno — интернет-магазин бренда одежды',
    html_url: 'https://www.siveno.store/', 
    stars: null,
    forks: null,
    short: 'Я делал фронтенд интернет-магазина: от каталога до корзины и оплаты.',
    description: (
      <>
        <Typography variant="body2" color="textSecondary" component="p">
          Я реализовал фронтенд на Next.js с FSD-архитектурой, интегрировал API с Laravel, подключил приём онлайн-оплаты
          через ЮKassa, настроил корзину, фильтры, поиск и блоки «Рекомендовано» и «Похожие товары». Сайт адаптивен и готов к росту.
        </Typography>
      </>
    ),
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Laravel', 'REST API'],
  },

  {
    name: 'Lise — платформа для лизинговой компании',
    html_url: null,
    stars: null,
    forks: null,
    short: 'Я разработал удобную и безопасную платформу для автоматизации оформления лизинга и управления клиентами.',
    description: (
      <>
        <Typography variant="body2" color="textSecondary" component="p">
          Я спроектировал сложную форму заявки с поддержкой физ. лиц, ИП и ТОО, реализовал пошаговое
          заполнение анкеты с сохранением состояния и гибкую валидацию данных. Интегрировал управление
          договорами, файлами и имуществом — чтобы менеджеры могли быстро проверять и редактировать данные до отправки.
        </Typography>
      </>
    ),
    tech: ['React', 'TypeScript', 'React Hook Form', 'Ant Design', 'Next.js', 'REST API'],
  },

  {
    name: 'Tabysu.kz — платформа для поиска тьюторов',
    html_url: 'https://tabysu.kz',
    stars: null,
    forks: null,
    short: 'Я участвовал в создании инклюзивной платформы для подбора тьюторов и сопровождения людей с особыми потребностями.',
    description: (
      <>
        <Typography variant="body2" color="textSecondary" component="p">
          Я реализовал фронтенд на Next.js с FSD-архитектурой и участвовал в создании бэкенд-инфраструктуры на Node.js.
          Настроил REST API для регистрации, поиска, бронирования и личных кабинетов, подключил MUI и сделал интерфейс
          доступным и адаптивным для разных категорий пользователей.
        </Typography>
      </>
    ),
    tech: ['Next.js', 'Tailwind CSS', 'Node.js', 'MUI', 'REST API', 'FSD'],
  },

  {
    name: 'SmartPlan — веб-интерфейс для расчётов и планирования',
    html_url: 'https://www.smartpln.ru/',
    stars: null,
    forks: null,
    short: 'Я разработал сложный интерактивный интерфейс с таблицами, расчётами и графиками — браузерный аналог Excel.',
    description: (
      <>
        <Typography variant="body2" color="textSecondary" component="p">
          Я реализовал динамические таблицы с разворачиванием и агрегацией, drag-and-drop для показателей,
          импорт/экспорт Excel, расчёты в реальном времени и экспорт в несколько форматов. Интерфейс получился гибким и
          функциональным, несмотря на неидеальный дизайн в ТЗ.
        </Typography>
      </>
    ),
    tech: ['React', 'Next.js', 'Tailwind CSS', 'React DnD', 'Recharts', 'Zustand', 'XLSX'],
  },

  {
    name: 'TattoMaster — онлайн-сервис для тату-мастеров и клиентов',
    html_url: null, // добавь ссылку, если проект доступен публично
    stars: null,
    forks: null,
    short:
      'Я разработал современную платформу для записи к тату-мастерам, с личными кабинетами и системой бронирований.',
    description: (
      <Typography variant="body2" color="textSecondary" component="p">
        Реализовал удобный интерфейс для мастеров и клиентов: профили, расписание, галерею работ и отзывы.
        Подключил REST API для обработки заявок, бронирований и уведомлений. Сделал адаптивный, визуально чистый и
        быстрый интерфейс, который работает стабильно как на десктопе, так и на мобильных устройствах.
      </Typography>
    ),
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'REST API', 'Framer Motion'],
  },



 
];

const useStyles = makeStyles(theme => ({
    cont: {
        minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
    },
    card: {
        height: '100%'
    },
    cardActionArea: {
        height: '100%',
        // display: 'grid'
    }
}))

export default function Projects({ data }) {

    const classes = useStyles()

    const animRef = useRef(null)
    const animate = useAnimate(animRef)

    return (
        <Grid 
  container 
  direction="column" 
  alignItems="center" 
  spacing={6} 
  className={classes.cont}
>
  {/* Заголовок */}
  <Grid item xs={12}>
    <Typography 
      variant="h2" 
      gutterBottom 
      align="center" 
      innerRef={animRef}
    >
      Мои проекты
    </Typography>
  </Grid>

  {/* Карточки */}
  <Grid 
    container 
    item 
    xs={12} 
    direction="row" 
    spacing={2} 
    justifyContent="center"
  >
    {projects.map((p, idx) => (
      <Grid item xs={12} sm={6} md={4} key={idx}>
        <Fade in={animate} style={{ transitionDelay: `${200 * idx}ms` }}>
          <Card className={classes.card}>
            <CardActionArea
              className={classes.cardActionArea}
              component={p.html_url ? 'a' : 'div'}
              href={p.html_url || undefined}
              target={p.html_url ? '_blank' : undefined}
              rel={p.html_url ? 'noopener noreferrer' : undefined}
            >
              <CardHeader
                title={<><RepoIcon verticalAlign="middle" /> {p.name}</>}
                subheader={
                  <>
                    {p.stars ? <><StarIcon verticalAlign="middle" />{p.stars}</> : null}
                    {p.forks ? <><RepoForkedIcon verticalAlign="middle" />{p.forks}</> : null}
                  </>
                }
              />

              <CardContent>
                <Typography 
                  variant="body1" 
                  component="p" 
                  style={{ fontWeight: 600, marginBottom: 8 }}
                >
                  {p.short}
                </Typography>
                {p.description}
              </CardContent>

              <CardActions>
                <Grid container direction="row" spacing={1}>
                  {p.tech && p.tech.map((lang, i) => (
                    <Grid item key={i}>
                      <Chip label={lang} size="small" />
                    </Grid>
                  ))}
                </Grid>
              </CardActions>
            </CardActionArea>
          </Card>
        </Fade>
      </Grid>
    ))}
  </Grid>
</Grid>

    )
}