import React, { Component } from 'react'
import "./Email.css";
import {
    Body,
    Container,
    Head,
    Html,
    Preview,
    Heading,
    Text,
    Link,
    Hr,
    Row,
    Column,
    Img,
} from "@react-email/components";
import sgMail from "@sendgrid/mail";
const API_KEY = "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"

sgMail.setApiKey(API_KEY);

// const fontFamily = {
//   fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
// };

// const h1 = {
//   fontSize: "3em",
//   ...fontFamily,
// };

// const text = {
//   fontSize: "16px",
//   ...fontFamily,
// };

// const footerText = {
//   fontSize: "12px",
//   textAlign: "center",
//   color: "#999",
//   ...fontFamily,
// };

// const container = {
//   backgroundColor: "#FFF",
//   padding: "0 20px",
//   borderRadius: "6px",
// };

const message = {
    to: "rezmanaagung.wibawa@gmail.com",
    from: "rezmanaaagung.wibawa@gmail.com",
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

export default function Email() {
    return (
        sgMail
            .send(message)
            .then((response) => {
                console.log(response[0].statusCode)
                console.log(response[0].headers)
            })
            .catch((error) => {
                console.error(error)
            })

        //   <Html>
        //     <Head />
        //     <Preview>Welcome to the site</Preview>
        //     <Body style={{ backgroundColor: "#f5ecc1" }}>
        //       <Container style={container}>
        //         <Heading as="h1" style={h1}>
        //           Welcome
        //         </Heading>
        //         <Text style={text}>Hello, {name}</Text>
        //         <Text style={text}>
        //           Now you're using React Email to create your emails.
        //         </Text>
        //         <Text style={text}>
        //           <Link href="https://react.email/docs/">
        //             Go to the documentation to learn more
        //           </Link>
        //           .
        //         </Text>
        //         <Hr />
        //         <Text style={footerText}>This email was sent by me, to myself.</Text>
        //        </Container>
        //      </Body>
        //   </Html>
    );
}
