import { Component } from '@angular/core';
import { Header2Component } from "../../Components/header2/header2.component";
import { Banner2Component } from "../../Components/banner2/banner2.component";
import { CategoriasComponent } from "../../Components/categorias/categorias.component";
import { ProductsComponent } from "../../Components/products/products.component";
import { HeaderComponent } from "../../Components/header/header.component";
import { Header3Component } from "../../Components/header3/header3.component";
import { BannerComponent } from "../../Components/banner/banner.component";
import { NewsletterComponent } from "../../Components/newsletter/newsletter.component";
import { Categorias2Component } from "../../Components/categorias2/categorias2.component";
import { Products2Component } from "../../Components/products2/products2.component";
import { BannerInformativoComponent } from "../../Components/banner-informativo/banner-informativo.component";
import { Products3Component } from "../../Components/products3/products3.component";

@Component({
    selector: 'app-home2',
    standalone: true,
    templateUrl: './home2.component.html',
    styleUrl: './home2.component.scss',
    imports: [Header2Component, Banner2Component, CategoriasComponent, ProductsComponent, HeaderComponent, Header3Component, BannerComponent, NewsletterComponent, Categorias2Component, Products2Component, BannerInformativoComponent, Products3Component]
})
export class Home2Component {

}
