import React from 'react'
import Grid from '@mui/material/Grid';
import styled from "styled-components"
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { margin } from '@mui/system';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import MediaCard from './Card';
const Homeleft = styled.div`
background-color: black;
`

const Video = styled.video`
max-height: 400px;
width: 100%;
padding:5em;

`
const RightDiv = styled.div`

margin: auto 2em;
  padding: 0 5em;
  margin-top: 1em;
text-align:left;

`
const RightChildHeading = styled.h1`
 font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.3px;
  margin-bottom: 1rem;
  font-size: 3em;

`

const RightChildText = styled.p`

font-weight: 400;
  line-height: 1.4444;
  letter-spacing: -0.2px;
  font-size: 1.125rem;
`

const RightChildLink = styled.a`
  line-height: 1.4444;
  letter-spacing: normal;
  color: #1264a3;
  font-weight: 600;
  text-decoration: none;


`
const TakeDeeperSectionCard = styled.div`
 color: #fff;
  background-color: #4a154b;
  width: 100%;
  min-height: 420px;
  flex-direction: column;
  border-bottom: none;
  max-width: 285px;
  position: relative;
  z-index: 1;
  transition: transform 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
  padding: 0.5em;
  &:hover {
    transform: scale(1.1);
    }

`
const TakeDeeperSectionCardheading = styled.h3`
  font-size: calc(1.4rem + (1.6000000000000014 * (100vw - 400px) / 624));

`
const TakeDeeperHeading = styled.h1`
text-align: center;
`
const CardFooter = styled.div` 
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 2.5em;
`

const AboveFooter = styled.div`
  background: #4a154b;
  border: none;
  clip-path: ellipse(75% 100% at center top);
  height: auto;
  min-height: 370px;
  display: grid;
  place-items: center;
  color: #fff;

`
const SlackFooterIcon = styled.div`
  display: grid;
  align-items: flex-start;

  font-size: 4em;

`
const BelowFooterSection = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 768px) {
    flex-direction: column;
  }
`
const LeftFooterSection = styled.div`
display: flex;
font-size: 13px;
`
const LeftFooterSectionItem = styled.div`
margin: 0 0.8em;
`
const RightFooterSection = styled.div`
display: flex;
font-size: 13px;
`
const RightFooterSectionItem = styled.div`
margin: 0 0.8em;
`
const TradeMark = styled.p`
  line-height: 1.25rem;
  font-size: calc(0.75rem + (0 * (100vw - 400px) / 624));
  color: #454245;


`
const Container = styled.div`

background-color: #541554;


`
const CustomerReviewItem = styled.div`
padding: 0 8em;

`
const TopHeaderText = styled.p`

color:white;
font-size: 1.2em;
font-weight: 600;
line-height: 1;

`
const CustomerReviewHeading = styled.h1`
  color: #611f69;
  font-size: 4em;
  line-height: 0.5;
  margin-bottom: 0.5em;

`
const CustomerReviewText = styled.p`
  font-size: 1rem;
  margin-top: 0;
`
const BelowVideo = styled.video`
  border-top-right-radius: 500px;
  border-bottom-right-radius: 500px;
  height: auto;
  width: 100%;
  padding: 2em 0;

`
const BelowRightDivText = styled.p`
  font-style: italic;
  font-size: 1.5em;
  line-height: 1.3;
`
const Remarks = styled.p`
 font-weight: 600;
  line-height: 0.5;


`
const RemarksText = styled.p`
font-weight: 400;
line-height: 0.5;
font-size: 0.8rem;
margin-bottom: 2em;
`



const Fact = styled.p`
text-align: center;
color: #696969 !important;
font-size: 0.875rem;
margin-bottom:0 ;
`

const Home = () => {
  return (
    <>
      <Container>
        <Grid container spacing={2} style={{ width: "80%", margin: "auto", }}>
          <Grid item xs={6} style={{ backgroundColor: "#541554", textAlign: "left", padding: "3em", }}>
            <div>

              <RightChildHeading><h3 style={{ color: "white", marginBottom: "0" }}>Great teamwork starts with a <span style={{ color: "gold" }}>digital HQ</span></h3></RightChildHeading>

              <RightChildText><h3 style={{ color: "white", lineHeight: "1.2", marginBottom: "3em", fontWeight: "400" }}>With all your people, tools and communication in one place, you can work faster and more flexibly than ever before.</h3></RightChildText>

              <Grid container spacing={2}>
                <Grid item xs={6} style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                  <Button variant="contained" style={{ backgroundColor: "white", color: "#541554", borderColor: "#541554", width: "100%", padding: "1em 2em" }}>SIGN UP WITH EMAIL</Button>
                </Grid>
                <Grid item xs={6} >
                  <Button variant="contained" style={{ backgroundColor: "#4285f4", color: "white", padding: "1em 1.5em" }} startIcon={<GoogleIcon />}>SIGH UP WITH GOOGLE</Button>
                </Grid>

              </Grid>
              <TopHeaderText>Slack is free to try for as long as you like</TopHeaderText>
            </div>
          </Grid >
          <Grid item xs={6} style={{
            backgroundColor: "#541554", display: " grid",
            placeItems: "center"
          }}>
            <div>
              <Video src='https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/hero-product-ui.webm' ></Video>
            </div>
          </Grid>

        </Grid >
      </Container>
      <Grid container spacing={2} style={{
        backgroundColor: "#f4ede4",
        margin: "3em auto"
      }}>
        <Grid item xs={12} md={6} lg={6}>
          <video
            autoPlay={true}
            loop={true}
            style={{ width: "100%", height: "400px" }}
          >
            <source
              src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/connectedness.webm"
              type="video/webm"
            />
          </video>
        </Grid>
        <Grid item xs={12} md={6} lg={6} >
          <RightDiv>
            <RightChildHeading >Bring your team together</RightChildHeading>

            <RightChildText>
              At the heart of Slack are channels: organised spaces for everyone
              and everything that you need for work. In channels, it’s easier to
              connect across departments, offices, time zones and even other
              companies.
            </RightChildText>
            <RightChildLink

              href="https://slack.com/intl/en-in/features/channels"
            >
              Learn more about channels <ArrowRightAltIcon />
            </RightChildLink>
          </RightDiv>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{
        backgroundColor: "#f4ede4",
        margin: "3em auto"
      }}>
        <Grid item xs={12} md={6} lg={6}>
          <RightDiv>
            <RightChildHeading >Choose how you want to work</RightChildHeading>

            <RightChildText >
              In Slack, you’ve got all the flexibility to work when, where and how
              it’s best for you. You can easily chat, send audio and video clips,
              or join a huddle to talk things through live.
            </RightChildText>
            <RightChildLink

              href="https://slack.com/intl/en-in/features/channels"
            >
              Learn more about flexible communication <ArrowRightAltIcon />
            </RightChildLink>
          </RightDiv>
        </Grid>
        <Grid item xs={12} md={6} lg={6} style={{
          backgroundColor: "#f4ede4",
          margin: "3em auto"
        }}>
          <video
            autoPlay={true}
            loop={true}
            style={{ width: "100%", height: "400px" }}
          >
            <source
              src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/flexibility.webm"
              type="video/webm"
            />
          </video>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <video
            autoPlay={true}
            loop={true}
            style={{ width: "100%", height: "400px" }}
          >
            <source
              src="https://a.slack-edge.com/221d25b/marketing/img/homepage/e2e-prospects/animations/webm/speed.webm"
              type="video/webm"
            />
          </video>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <RightDiv>
            <RightChildHeading >
              Move faster with your tools in one place
            </RightChildHeading>

            <RightChildText >
              With your other work apps connected to Slack, you can work faster by
              switching tabs less. And with powerful tools like Workflow Builder,
              you can automate away routine tasks.
            </RightChildText>
            <RightChildLink

              href="https://slack.com/intl/en-in/features/channels"
            >
              Learn more about the Slack platform <ArrowRightAltIcon />
            </RightChildLink>
          </RightDiv>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <h1>Teams large and small rely on Slack</h1>
        <p>
          Slack securely scales up to support collaboration at the world’s
          biggest companies.
        </p>
      </Grid>
      <Grid container spacing={2} style={{
        width: "90%",
        margin: "auto"
      }}>
        <Grid item xs={12} md={4} lg={4}>
          <CustomerReviewItem>
            <CustomerReviewHeading>85%</CustomerReviewHeading>
            <CustomerReviewText >
              of users say Slack has improved communication*
            </CustomerReviewText>
          </CustomerReviewItem>
        </Grid>
        <Grid item xs={12} md={4} lg={4} >
          <CustomerReviewItem>
            <CustomerReviewHeading>86%</CustomerReviewHeading>
            <CustomerReviewText >
              feel their ability to work remotely has improved*
            </CustomerReviewText>
          </CustomerReviewItem>
        </Grid>
        <Grid item xs={12} md={4} lg={4} >
          <CustomerReviewItem>
            <CustomerReviewHeading>88%</CustomerReviewHeading>
            <CustomerReviewText >
              feel more connected to their teams*
            </CustomerReviewText>
          </CustomerReviewItem>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ background: "#f9f9f9" }}>
        <Grid item xs={12} md={6} lg={6}>
          <BelowVideo
            autoPlay={true}
            loop={true}
            style={{ width: "100%", padding: "2em 0" }}

          >
            <source
              src="https://a.slack-edge.com/93eaeb3/marketing/img/features/customer-awards/customer-awards-tmobile-quote-610x305@2x.mp4"
              type="video/webm"
            />
          </BelowVideo>
        </Grid>
        <Grid item xs={12} md={6} lg={6} style={{ padding: "0 1.6em" }}>
          <BelowRightDivText>
            ‘We were able to create a large virtual network of employees that
            can communicate as though they are together. There was a lot of
            disruption in terms of where we worked, but in terms of how we
            worked – very little disruption.’
          </BelowRightDivText>
          <Remarks>Mark Smith</Remarks>
          <RemarksText>
            Senior Technical Product Manager, T-Mobile
          </RemarksText>
          <RightChildLink
            href="https://slack.com/customer-stories"
          >
            See more customer stories <ArrowRightAltIcon />
          </RightChildLink>
        </Grid>
      </Grid>
      <div>
        <Fact>
          * Weighted average. Based on 2,707 survey responses from weekly Slack
          users in the US, UK, Australia and Canada with a ± 2% margin of error
          at 95% CI (December 2021).
        </Fact>
      </div>
      <div style={{ backgroundColor: "#f4ede4" }}>
        <h1 style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
          Take a deeper dive into a new way to work
        </h1>

        <Grid container spacing={7} style={{
          margin: "2em auto",
          width: "80%",
          backgroundColor: "#f4ede4"
        }}>
          <Grid item xs={12} md={3} lg={3}>
            <TakeDeeperSectionCard>
              <span>Collection</span>
              <TakeDeeperSectionCardheading>
                Slack as your digital HQ
              </TakeDeeperSectionCardheading>
              <img
                src="https://a.slack-edge.com/891d9e5/marketing/img/digital-hq/promos/img-promo-01.png"
                alt=""
              />

              <CardFooter>
                <div>
                  <h4>SEE ALL</h4>
                </div>
                <div>
                  <ArrowRightAltIcon style={{ fontSize: "2em" }} />
                </div>
              </CardFooter>
            </TakeDeeperSectionCard>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <MediaCard belowText="READ MORE" heading="Resource" text="See how others are building their digital HQ" imageLink="https://a.slack-edge.com/891d9e5/marketing/img/digital-hq/promos/img-promo-02.jpg" />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <MediaCard belowText="WATCH NOW" heading="Webinar" text="Embracing a digital-first approach to work" imageLink="https://a.slack-edge.com/9fbc946/marketing/img/digital-hq/promos/img-promo-03.jpg" />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <MediaCard belowText="GET E-BOOK" heading="E-book" text="Reinventing work: new imperatives for the future of working" imageLink="https://a.slack-edge.com/9fbc946/marketing/img/digital-hq/promos/img-promo-04.jpg" />
          </Grid>
        </Grid>
      </div>
      <AboveFooter >
        <h1>Welcome to your new digital HQ.</h1>

        <Grid container spacing={2} style={{ width: "25%", margin: "auto", display: "flex", justifyContent: "space-between", alignitems: "center" }}>
          <div>
            <Button variant="contained" style={{ backgroundColor: "white", color: "#541554", borderColor: "#541554", width: "100%", padding: "1em 2em" }}>SIGN UP WITH EMAIL</Button>
          </div>
          <div>
            <Button variant="outlined" style={{ borderColor: "white", color: "white", width: "100%", padding: "1em 2em" }}>Talk To Sales</Button>
          </div>
        </Grid>
      </AboveFooter>
      <Grid container spacing={2} style={{
        margin: "2em auto",
        backgroundColor: "white"
      }}>
        <Grid item xs={12} md={2} lg={2}>

          <AcUnitIcon style={{
            display: "grid",
            margin: "0 auto",

            fontSize: "4em"
          }} />

        </Grid>
        <Grid item xs={12} md={2} lg={2}>
          <ul>
            <li>
              {" "}
              <strong>WHY SLACK?</strong>{" "}
            </li>

            <li>Slack vs email</li>
            <li>Channels</li>
            <li>Engagement</li>
            <li>Scale</li>
            <li>Watch the demo</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={2} lg={2}>
          <ul>
            <li>
              {" "}
              <strong>PRODUCT</strong>{" "}
            </li>

            <li>Features</li>
            <li>Integrations</li>
            <li>Enterprise</li>
            <li>Solutions</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={2} lg={2}>
          <ul>
            <li>
              {" "}
              <strong>PRICING</strong>{" "}
            </li>

            <li>Subscriptions</li>
            <li>Paid vs free</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={2} lg={2}>
          <ul>
            <li>
              {" "}
              <strong>RESOURCES</strong>{" "}
            </li>

            <li>Partners</li>
            <li>Developers</li>
            <li>Community</li>
            <li>Apps</li>
            <li>Blog</li>
            <li>Help Centre</li>
            <li>Events</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={2} lg={2}>
          <ul>
            <li>
              {" "}
              <strong>COMPANY</strong>{" "}
            </li>

            <li>About us</li>
            <li>Leadership</li>
            <li>Investor relations</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Careers</li>
          </ul>
        </Grid>
      </Grid>
      <hr />
      <BelowFooterSection>
        <LeftFooterSection>
          <LeftFooterSectionItem>
            <h4>Status</h4>
          </LeftFooterSectionItem>

          <LeftFooterSectionItem>
            <h4>Privacy</h4>
          </LeftFooterSectionItem>
          <LeftFooterSectionItem>
            <h4>Terms</h4>
          </LeftFooterSectionItem>
          <LeftFooterSectionItem>
            <h4>Cookie preferences</h4>
          </LeftFooterSectionItem>
          <LeftFooterSectionItem>
            <h4>Contact us</h4>
          </LeftFooterSectionItem>
          <LeftFooterSectionItem>
            <h4>Change region</h4>
          </LeftFooterSectionItem>
        </LeftFooterSection>
        <RightFooterSection>
          <RightFooterSectionItem><CloudDownloadIcon />Download Slack</RightFooterSectionItem>
          <RightFooterSectionItem><TwitterIcon /></RightFooterSectionItem>
          <RightFooterSectionItem><FacebookIcon /></RightFooterSectionItem>
          <RightFooterSectionItem><YouTubeIcon /></RightFooterSectionItem>
          <RightFooterSectionItem><LinkedInIcon /></RightFooterSectionItem>
        </RightFooterSection>
      </BelowFooterSection>
      <TradeMark>
        ©2022 Slack Technologies, LLC, a Salesforce company. All rights
        reserved. Various trademarks held by their respective owners.
      </TradeMark>
    </>
  )
}

export default Home
