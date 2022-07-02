import * as React from "react";
import "./App.css";
import theme from "./theme";

// 1. import `ChakraProvider` component
import {
    ChakraProvider,
    Heading,
    Text,
    Button,
    useColorMode,
} from "@chakra-ui/react";

function Example() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <header>
            <Button onClick={toggleColorMode}>
                Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
        </header>
    );
}

function App() {
    // 2. Wrap ChakraProvider at the root of your app
    return (
        <ChakraProvider theme={theme}>
            <div className="App">
            <Heading as="h1" size="xl" noOfLines={1} className="header">
                    Hi!
                </Heading>

                <div className="AppContent">
                    <Text> Not sure how you landed on this page, but as you can see, it is still work in progress. </Text>
                    <Text> I am hoping to finish building this personal website by the end of this summer. </Text>
                    <Text paddingBottom={'25pt'}> If you like, you can toggle the button below to change the colour mode. </Text>
                    
                    <Example></Example>
                    
                    <br/>
                    <a href="https://www.flaticon.com/free-icons/panda" title="panda icons">The icons in the page title are created by Freepik - Flaticon. </a>
                </div>
            </div>
        </ChakraProvider>
    );
}

export default App;
