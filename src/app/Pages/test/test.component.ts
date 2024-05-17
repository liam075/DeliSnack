import { Component } from '@angular/core';
import { CategoriasComponent } from "../../Components/categorias/categorias.component";
import { BannerComponent } from "../../Components/banner/banner.component";
import { ProductsComponent } from "../../Components/products/products.component";
import { NewsletterComponent } from "../../Components/newsletter/newsletter.component";
import { Banner2Component } from "../../Components/banner2/banner2.component";
import { Header2Component } from "../../Components/header2/header2.component";
import { Banner3Component } from "../../Components/banner3/banner3.component";
import { Header3Component } from "../../Components/header3/header3.component";
import { BannerInformativoComponent } from "../../Components/banner-informativo/banner-informativo.component";
import { Products2Component } from "../../Components/products2/products2.component";

@Component({
    selector: 'app-test',
    standalone: true,
    templateUrl: './test.component.html',
    styleUrl: './test.component.scss',
    imports: [CategoriasComponent, BannerComponent, ProductsComponent, NewsletterComponent, Banner2Component, Header2Component, Banner3Component, Header3Component, BannerInformativoComponent, Products2Component]
})
export class TestComponent {

}
