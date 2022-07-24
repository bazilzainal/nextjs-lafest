import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import Section from "../../components/section";
import { siteTitle } from "../../components/layout";
import { Container } from "react-bootstrap";
import utilStyles from "../../styles/utils.module.css";
import Script from "next/script";

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>Register | {siteTitle}</title>
            </Head>
            <Script id="eventbriteThirdParty" src="https://www.eventbrite.sg/static/widgets/eb_widgets.js" strategy="beforeInteractive"/>
            <Script id="eventbriteInline" strategy="afterInteractive">
                {` console.log("scriptooooo");
                var exampleCallback = function() {
                    console.log('Order complete!');
                };

                window.EBWidgets.createWidget({
                    // Required
                    widgetType: 'checkout',
                    eventId: '381687205707',
                    iframeContainerId: 'eventbrite-widget-container-381687205707',

                    // Optional
                    iframeContainerHeight: 850,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
                    onOrderComplete: exampleCallback  // Method called when an order has successfully completed
                });`}
            </Script>
            <Section size="Lg">

                <h1>Register</h1>
                <Container>
                    <div id="eventbrite-widget-container-381687205707"></div>
                </Container>
            </Section>
        </Layout>
    );
}
