import { Image, Card, Button, Center, Flex } from "@chakra-ui/react";
import { useState } from "react";


function Foodcard({dish, desc, img}){

  const [hovered, setHovered] = useState(false);

    return(
      <div>
        <Flex gap="4">
        <Card.Root maxW="sm" size="sm" overflow="hidden" rounded="lg" style={{ textAlign: 'justify'}}>
                <Image src={img} alt="Dosa" />
                <Card.Body gap="2">
                    <Card.Title>{dish}</Card.Title>
                    <Card.Description>{desc}</Card.Description>
                </Card.Body>
                <Center>
                <Card.Footer>
                    <Button variant="solid" 
                      rounded={hovered ? "xl" : "sm"}
                      onMouseEnter={() => setHovered(true)}  
                      onMouseLeave={() => setHovered(false)}> 
                      Cook Now
                    </Button>
                </Card.Footer>
                </Center>
          </Card.Root>
        </Flex>
      </div>  
    );
}
export default Foodcard;