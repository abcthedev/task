import React, { Component } from 'react'
import CustomImage from "../../components/Atoms/Image/Image";
import Text from "../../components/Atoms/Text/Text";
import Header from "../../components/Molecules/Header/Header";
import SearchBlock from "../../components/Molecules/Search/SearchBlock";
import HomeImage from "../../icons/homeimage.png";

interface Props {
    
}
interface State {
    
}

export default class HomePage extends Component<Props, State> {
    state = {}

    render() {
        return (
            <>
          <Header />
          <CustomImage
            ImgSrc={HomeImage}
            ImgAlt={"HomeImage"}
            ClassName={"w-100 h-100"}
          />
          <Text
            Type="Heading"
            ClassName={"text-white p-absolute subpage-header"}
            Text={"Find hundread of available stalls and barns for your horses"}
          />
          <Text
            Type="Paragragh"
            ClassName={"text-white p-absolute subpage-subheader"}
            Text={"Find hundread of available stalls and barns for your horses"}
          />
          <SearchBlock />
            </>
        )
    }
}
