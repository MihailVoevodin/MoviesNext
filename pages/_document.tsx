import {Html, Head, Main, NextScript} from 'next/document';

/**
 *  Основной компонент документа
 */
export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href="//db.onlinewebfonts.com/c/a1750a4dae8db954fdd595f313b3b34e?family=Graphik+Kinopoisk+LC+Web+SB"
                    rel="stylesheet"
                    type="text/css"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
