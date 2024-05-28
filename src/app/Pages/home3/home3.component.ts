import { Component } from '@angular/core';
import { HeaderComponent } from "../../Components/header/header.component";
import { BannerComponent } from "../../Components/banner/banner.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { Header3Component } from "../../Components/header3/header3.component";
import { Header2Component } from "../../Components/header2/header2.component";
import { Categorias2Component } from "../../Components/categorias2/categorias2.component";
import { Products2Component } from "../../Components/products2/products2.component";
import { NewsletterComponent } from "../../Components/newsletter/newsletter.component";
import { TopProductsComponent } from "../../Components/top-products/top-products.component";
import { BannerInformativoComponent } from "../../Components/banner-informativo/banner-informativo.component";

@Component({
    selector: 'app-home3',
    standalone: true,
    templateUrl: './home3.component.html',
    styleUrl: './home3.component.scss',
    imports: [HeaderComponent, BannerComponent, FooterComponent, Header3Component, Header2Component, Categorias2Component, Products2Component, NewsletterComponent, TopProductsComponent, BannerInformativoComponent]
})
export class Home3Component {

}
