import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { DataloaderService } from '../datastore/dataloader.service';
import { HttpClient } from '@angular/common/http';
import { DRIVE_API_KEY, DRIVE_MAPPING } from './const/GoogleApiConst';
=======
>>>>>>> 89d8ded4a1e11302b504c450a436c62f47871c1e

@Injectable({
  providedIn: 'root'
})
export class HeroImageService {

<<<<<<< HEAD
  isDriveEnabled: boolean = true
  


// Cache structure
private cache: { [key: string]: { data: string[]; timestamp: number } } = {};
private readonly CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

  constructor(private dateLoaderService: DataloaderService, private http: HttpClient) {
    this.getAllInstaPosts();
  }
  
  saveData(data : any) {
    this.dateLoaderService.addDocumentWithDocumentId('posts', data.shortCode ,data)
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  }



  async  getHeaderImages() {

    if (this.isDriveEnabled) { 
      return this.fetchImages(DRIVE_MAPPING.HERO);
    }

    return [
      './assets/img/kombanz/header/kombanz-hero-1.jpg',
      './assets/img/kombanz/header/kombanz-hero-2.jpg',
      'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/456447775_899530832194088_1977489687753022608_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=9ArJM5qxsf8Q7kNvgFZD9uX&_nc_oc=Adja-qkrSLD1fVtoXQYKaZlH0BFTatBOFsvoeFEErFUvvJEjMYvbtP4Jq7V6rn_QiaU&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=A1e8jCMvsrRWqsqXWzZCyJA&oh=00_AYAIB8zGq9O3Lh17Wd_PCp29_atTLEfAkeP3KLFrm4V_EA&oe=677ACB68',
      'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/455132775_893773002769871_7669714720038167158_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=G-u3D42YG_cQ7kNvgGhYy9x&_nc_oc=AdhCPNWY-8mL_yoDYPhK8v2PwUc-O3Sv507uPNMoD-vw2HZTmQD8eDAwVKpp9mEBfLQ&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AwSorF0Sy0ytL9g2WnEprgw&oh=00_AYBaFpXSGTFbk17hW9t-Wj65Kq0fD4sAPUcMrbzrpEjehw&oe=677ABBB8',
    ];
   }
  
  async getAboutImages() {
    if (this.isDriveEnabled) { 
      return this.fetchImages(DRIVE_MAPPING.ABOUT);
    }
    return [
      'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/453156454_883283603818811_2459521650337319738_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=UjLwI03Zc_0Q7kNvgFcr9L5&_nc_oc=AdjMpXr9zZy7KS92OAVACWzdw9WJSxRbZI_U1zYuG5BLFJjPBjwy7j-MjloJDpGvPvI&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AVCStGIon9tBTtHnDCT2Xcv&oh=00_AYBSyzsdbHN2COintatEBTMzDJUrvB3k9m8aoSbYM8X7qQ&oe=677AB817',
      'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/451781553_877863164360855_800289127047933708_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=b2AZIdPW4h8Q7kNvgGbNvKg&_nc_oc=AdiIHgLXFOmcZCvS9bqqEQ_nxGoz_czvmA6EbbkVj4qzxAWxChz22VqWGLns-pafiL8&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=A7uGtRzBQ6DyjTcxcw2JTR3&oh=00_AYDHik6p5qKrtGTRMl5Uu01Gcery0HJ19tFsNnme1DKaBQ&oe=677ABFD0',
    ];
  }

  async getServiceImages(): Promise<{ [key: string]: string }> {
    
  if (this.isDriveEnabled) {
    try {
      const weddingPromise = this.fetchImages(DRIVE_MAPPING.SERVICE_WEDDING);
      const potraitPromise = this.fetchImages(DRIVE_MAPPING.SERVICE_POTRAIT);
      const kinderPromise = this.fetchImages(DRIVE_MAPPING.SERVICE_KINDER);
      const engagementPromise = this.fetchImages(DRIVE_MAPPING.SERVICE_ENGAGEMENT);

      // Wait for all promises to resolve
      const [weddingImages, potraitImages, kinderImages, engagementImages] = await Promise.all([
        weddingPromise,
        potraitPromise,
        kinderPromise,
        engagementPromise,
      ]);

      return {
        wedding: weddingImages[0] || '',
        potrait: potraitImages[0] || '',
        kinder: kinderImages[0] || '',
        engagement: engagementImages[0] || '',
      };
    } catch (error) {
      console.error('Error fetching service images:', error);
      return {};
    }
  }

    return {
      wedding: 'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/409506193_742078834605956_671846996577550548_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=JriVbnb4RAEQ7kNvgFn_TNC&_nc_oc=AdiDZEh5XIFuYzleLGe6kRrhuX50ep1OUSVtSkeaM5B95OTONOHgngM3RFH80mn1rOQ&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=Ar8cctYWpKR-PRuwLjF51sR&oh=00_AYCdYuFQ5xGGGUNy5vgRPIzV2My1n7u67zl95CTwpzAlvA&oe=677AC1BF',
      potrait:  'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/305652386_5462260453892763_1532894608323771448_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=l-78lmnh6VEQ7kNvgHRbdNa&_nc_oc=Adj72s9pVNc2mtdOy8MioBHMPV-GrZ6qQEjraKTYrx8lBgIkBma98TNzkgzELzzV0HU&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AeVlQzypgbqfOndKDqtC1Ta&oh=00_AYDp-3ol7D1c4zCD8eMPvOt5xJY3EXPMdTAkcqMlge72aw&oe=677AC7AC',
      kinder:  'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/410483808_744858717661301_8733430009039514483_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=jwAaq53VEBIQ7kNvgHztUuL&_nc_oc=AdhGmSHWzbRIHeRy0Sl_PRtrZ_cyKixEIVHOLjtmpIuv1ihxS8AaEUD_3dzfbUQaB9s&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=ANV6TiZXi9xff-seCGr2mLP&oh=00_AYBx3n76mY5JFHyy0woCX8aZlUKHPw2ce_Qmp3mkjfi97A&oe=677AC4A6',
      engagement:  'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/398966947_721037530043420_1040685066568283085_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=DQ0vxzME6uMQ7kNvgFv58yo&_nc_oc=Adj1PP8l9NwRMAtFzhXW5Ehne_BSPcJ2VR60SwX_1EHZ2OxSCtRJ36bxTVDd2lrQnkY&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AZ7llpwGcBb6KBBcwt3gM34&oh=00_AYD9IwR7xtl3C00EZGRAgW9biqTBNF6UfiCKdyKibixTww&oe=677ABD00',
    };
   }
  
  async getProjectImages(): Promise<{ [key: string]: string }> {
     
     if (this.isDriveEnabled) { 
      
       const promise_wedding1 = this.fetchImages(DRIVE_MAPPING.PROJECT_WEDDING_1);
       const promise_wedding = this.fetchImages(DRIVE_MAPPING.PROJECT_WEDDING);
       const promise_potrait = this.fetchImages(DRIVE_MAPPING.PROJECT_POTRAIT);
       const promise_kinder = this.fetchImages(DRIVE_MAPPING.PROJECT_KINDER);
       const promise_engagement = this.fetchImages(DRIVE_MAPPING.PROJECT_ENGAGEMENT);
       const promise_savedate = this.fetchImages(DRIVE_MAPPING.PROJECT_SAVE_THE_DATE);
       const promise_festivals = this.fetchImages(DRIVE_MAPPING.PROJECT_FESTIVALS);
       const promise_maternity = this.fetchImages(DRIVE_MAPPING.PROJECT_MATERNITY);

        const [wedding1, wedding, potrait, kinder, engagement, savedate, festivals, maternity] = await Promise.all([
          promise_wedding1,
          promise_wedding,
          promise_potrait,
          promise_kinder,
          promise_engagement,
          promise_savedate,
          promise_festivals,
          promise_maternity
        ]);
       
        return {
          wedding1: wedding1[0] || '',
          wedding: wedding[0] || '',
          potrait: potrait[0] || '',
          kinder: kinder[0] || '',
          engagement: engagement[0] || '',
          savedate: savedate[0] || '',
          festivals: festivals[0] || '',
          maternity: maternity[0] || ''
      };

    }

    return {
      wedding1:  'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/391737883_708381217975718_4963468776869705604_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=v7Z16m2m3A4Q7kNvgHp6YRs&_nc_oc=Adj3xok--RrFlzy95AoMoWYIsDU0NxKPtxVeuTghqCLHw2KwcGUEZFBQJ9qN9fHXnOI&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AOdnF_GAsPftRDM1trCWgB1&oh=00_AYCkiM5pIku-HBa0MUv2ANdZkDf3ecoigSV4P_8qflndWA&oe=677AABCE',
      wedding:  'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/305408811_448831337264042_4443262868387940171_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=JjD-lzrg2xcQ7kNvgEOuKPQ&_nc_oc=AdjkPuPcrUlvGjP-KzPq5vluwkPqJB32Z_IVe-rs6oKr2PpfbyLDlinpZUOplJ9mZ6k&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AFe3lCSQYzige3hXoRVX6EW&oh=00_AYAUuFGNgYx7l2Z5H0kHY8wG1cxrgzV7S3-TeT6LiipH9Q&oe=677AA7F6',
      potrait:  'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/375172452_686708660142974_2084293634953395879_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=2ZDauUxVXJcQ7kNvgEYK7eM&_nc_oc=Adg-9Muvf3o6J6Kf6IE11hRgEs6gYuBJuQZgZfsEqBtT5zvFEY3jq8LgrgWF64M8YkM&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=ARUs7O7BuRSl0bWHJOhK5KZ&oh=00_AYAHBW-wPv1FSmaSIMPtlm4JImT19vQ3BjCVf_zSSxPAuA&oe=677AB7CF',
      kinder:  'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/308439978_464347532379089_7160802471090715897_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=DqT9mQahAI8Q7kNvgGJWeT4&_nc_oc=AdhLF8uSVABbERZmo9fwZUkTtlsrR1T6Yw0fDUrM_Q4psLGqNjcAv7-CtKXFnEP0rWg&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AbIeYeI1814kf9W4uvV-qf8&oh=00_AYA30bJzs8wOo29ElEbxOX6topgUrYh6xyxtPXsZK04isA&oe=677AB805',
      engagement:  'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/353411268_640873724726468_5909314462288072316_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=bIpxU8HI44AQ7kNvgGHXOVo&_nc_oc=Adi8X_he_AU-6ZnzTgxOKF_qKo07v8XFleUlFNLVZ22Z0oAc22FZ3KVnxbRlxAbWpmQ&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AtxHngC6Cb_FSibgR0hCzdb&oh=00_AYDNqqpaOTsDKTXyfl0K5XTUr-ZaDbaUlRo87dSunw5vHQ&oe=677AD702',
      savedate:  'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/346857704_539600808323901_1946955277195300980_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=HgT-99OHfHYQ7kNvgFlh3s_&_nc_oc=AdgaoyVamaF64NSZ8dUDlV8yQXuxovY1IK5wncsHJvbzg3veaM_3Ve-__JJm4TnfLbY&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AiwHEDTMgdOcvGsltJlgnvb&oh=00_AYCoHUTBl6Jdb9NGHW-Cxhh2reh9CPlQNIuTKtsxHtNFdQ&oe=677AACFE',
      festivals:  'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/320530692_5840609896031370_2965782162617521132_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=CX8b_5hygbsQ7kNvgEfA3F9&_nc_oc=AdgrEtq-nx6RWDbNY29TYzNZr3Bz9w64jZPw2w6QCyurLgMaQsGxgREedz6iWb25YVE&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AjZlkRoHnpmtbAxWjgTXFHr&oh=00_AYAbDGr1lLJxSt9O8nE_MmQb2szIprY07Kqx9OJWYy2tlA&oe=677AA8A5',
      maternity: 'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/283021802_1129333407612176_17432760402361855_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Fdy0QlsJUsoQ7kNvgGe6spH&_nc_oc=Adi78Ofc7I4JsWz1Cvz_xxdrFjbqZxmlVpi0CIpRpBU5iRsTVt-gDDx8Q35sbLU87Dk&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AGhbA04gYS6vz7R2yrQuLip&oh=00_AYBHWcvWpJLND6F7hfYqHUay5ichdxCzFbv7eltig3AIWA&oe=677AB10B',
    };
   }
  
  async getContactImages() {
    if (this.isDriveEnabled) { 
      return this.fetchImages(DRIVE_MAPPING.CONTACT);
    };
    return [
     'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/293382159_411787930968383_2996888312504869812_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=bCVtk1AWjo4Q7kNvgH8DL-F&_nc_oc=AdimL9YZXGZGCnFfuVDlp1Ov41rHN_8PphpzV2fgIitBtPkxq0qPhExzvSdiSFXbPZY&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=ADiBhoaTe4AxV6ZTe_Fb01M&oh=00_AYA2kP7D43QkYmQxeRknllN-XJ0iiecDoy__ib2uJut7qg&oe=677AB4A1',
      'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/280828100_1127259891152861_1346539125828907907_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=UbDb9DkHdm0Q7kNvgENNB_d&_nc_oc=AdjbzHkbkokLtjxVnv-huXo3ikpPG8KHmezY7c1Fi-FD7lzDRofz593JFtpdsd1UNPg&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=A7N3hEgEKnrM4d6ohmJc2KQ&oh=00_AYCnsgGyzu0VzfqjdsLgaYWtxnHBCLNmMaKtUu8K3lDs2g&oe=677AC7C5',
      'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/279150909_1113138155898368_4994668033346119823_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=-JMFZpdtNskQ7kNvgE1dxF_&_nc_oc=Adg3-YbPsqEKLWSt2IOg-S1058CfcvCUrLW_qz-9uhLxTD5GIoEiIiB5ouwIJ34Yopg&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AKQo9t41Kj-2VJOMUU_UeqJ&oh=00_AYCVvlWyt9RCUebaUSRmlzRHptIidZlnJLri2c2j7j9aOA&oe=677AAF09',
      'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/470679179_1698698257342352_7772966594909496131_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=v9yK2qUqx5wQ7kNvgHRycrl&_nc_oc=Adj0CIjfIhQUTL60xTWOs-tjoUKBfMhJcBNr_SopDlDX0JBspyRs2jzKqki8gqAGeQ0&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=A2K51uyVIlE6DX9JL0G97_v&oh=00_AYDN4P5WVMak1MIG-b15D2QVevYZD0YrzgF2XbbGELiSWw&oe=677AB548',
    ];
  }

  getAllInstaPosts() { 
    return this.dateLoaderService.fetchCollection('posts')
  }

  getAllInstaPostsFromCurrentPage(currentPage: String) { 
    return this.dateLoaderService.fetchCollection('posts')
  }



 fetchImages(driveId: DRIVE_MAPPING): Promise<string[]> {
  const currentTime = Date.now();

  // Check if the data is cached and still valid
  if (
    this.cache[driveId] &&
    currentTime - this.cache[driveId].timestamp < this.CACHE_DURATION
  ) {
    console.log(`Serving cached data for ${driveId}`);
    return Promise.resolve(this.cache[driveId].data);
  }

  // If not cached or cache expired, fetch new data
  const url = `https://www.googleapis.com/drive/v3/files?q='${driveId}'+in+parents&key=${DRIVE_API_KEY}&fields=files(id,name,mimeType)`;

  return new Promise((resolve, reject) => {
    this.http.get<any>(url).subscribe(
      (response) => {
        const images = response.files
          .filter((file: any) => file.mimeType.startsWith('image/'))
          .map((file: any) => 
            `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&key=${DRIVE_API_KEY}`
          );

        // Update the cache with the new data and timestamp
        this.cache[driveId] = { data: images, timestamp: currentTime };

        resolve(images);
      },
      (error) => {
        console.error('Error fetching images:', error);
        reject(error);
      }
    );
  });
}
=======
  constructor() { }

   getHeaderImages() {
    return [
      './assets/img/kombanz/header/kombanz-hero-1.jpg',
      './assets/img/kombanz/header/kombanz-hero-2.jpg',
      'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/434309680_807921321355040_8172881596223497229_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=0C3SUJX9CTcQ7kNvgG1AGEC&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AFJC5f3hZCdla3LkGnJc0xp&oh=00_AYDzmkTqhpLu0t86c0-BqhglGjJ_twJvVxU1AJ8ffB8U1Q&oe=67643C15',
      'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/453041464_883283700485468_7488907379198952080_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=r-jh9i-RXIgQ7kNvgHhgWI3&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=A-IJdvKMcFiHyOzqtpq3J4-&oh=00_AYCqAXqLY8RRABbCpY23sEKzeIzB8MrCrcrP2FRntbdvbQ&oe=676438E3'
    ];
   }
  
  getAboutImages() {
    return [
      'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/410467713_744858480994658_6659287265796379098_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=9BAeZH45jPAQ7kNvgEPJe-f&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=A8VHj1Kqq-2qoDUqJVKkK1k&oh=00_AYCfy7jURIK91OfR8bzYh5kh3VrGu8gSaTOtPL8IseqmKA&oe=6764281C',
      'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/404997236_734683695345470_6279929794197299951_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=BcnkfsVR8LEQ7kNvgH3wvE3&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AqCcbtG9Ks-FGmWaHejZZqp&oh=00_AYA-zMEm7-4zVEeBEvOmRPphoy4By7WylV0cbsCRefZKSQ&oe=67643452'
    ];
  }

   getServiceImages(): { [key: string]: string } {
    return {
      wedding: 'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/439226546_821473323333173_4272519808458094449_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=gOKBXW6sxGMQ7kNvgF-cF1A&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AdnKTfRmUTuMlDVFLddpVQy&oh=00_AYCRnXbKjpDwsF05cLTZQECkqak9T5SuidHP1dEWP7ms5w&oe=67643CF3',
      potrait: 'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/375670195_6602603656525098_1356673810487548420_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=NvOuiHwYP8gQ7kNvgFwWK28&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=A2uWYOCOuJErzwXmelmcuVI&oh=00_AYDbcE354jyaFYpllTn8UcF-eZcZ59J7vipSxxt1p1NHFQ&oe=67643D5D',
      kinder: 'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/308439978_464347532379089_7160802471090715897_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=E0bqgM9U69UQ7kNvgEtg1qj&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=A0x9aNT2NqNNTt5GUEw8STR&oh=00_AYBC-VuWBteJDapWRRzc96wAu6cdZiHWJJdklOqxG8IgIw&oe=67644E85',
      engagement: 'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/449785451_868747908605714_3042381905672143431_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=TMrS4TWixMsQ7kNvgHgepox&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=A2L2MJtV2qej6UVxW5CrhcZ&oh=00_AYDE5UD-4rCZcDQ08OmPnAaRVmt5P8bcks0g4EXMDoNnyg&oe=6764327C',
    };
   }
  
   getProjectImages(): { [key: string]: string } {
    return {
      wedding: 'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/305304213_448831627264013_3091428343691392595_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Z6LlxjGpny4Q7kNvgFedeoI&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AeOm7gPp9tz-_Q0L0gqqIN3&oh=00_AYBBeeNCKYPpoRX_1VteSG50LTE7tjKmG3oZPiwFFwS1iw&oe=676455B6',
      wedding1: 'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/294691111_417287563751753_2763693574143745327_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=IL3BIYDoVdwQ7kNvgHdA-uV&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AyjVth5Zt8gmh9PulO9Lr7P&oh=00_AYB3peRp0qHX1Ef6gI9AXoRNJ-RkfLIaW3cbtlp_juiWdg&oe=67645726',
      potrait: 'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/306123810_450311913782651_2812413650057030355_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=dA7xmDtT3eMQ7kNvgFYS9O-&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=Aio2Jj7I6PxB5nGA2ludAzC&oh=00_AYDm7m9VIDtv5nZc1SOFBoXyD4_TSbzjSi3ifeNqnhZ9oA&oe=676458CC',
      kinder: 'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/293382159_411787930968383_2996888312504869812_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=pXcb8LTVjV8Q7kNvgGBMyOT&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AH_kmcF-cdoIEP8JCoO37bW&oh=00_AYBSd6Vlrepr0uE8VR287Oyr1tmlOTpYftKvX2sqOM-P4Q&oe=67644B21',
      engagement: 'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/311792198_479657424181433_8523821628668755565_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=qGDTLTO4o40Q7kNvgGceWbF&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AZlRKYRqewMTks_TI3N2zE4&oh=00_AYB5wyfJf2i-S6ladMP3WEz2aL0CBfPwb_IbhDitNrfPng&oe=67645129',
      savedate: 'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/449785451_868747908605714_3042381905672143431_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=TMrS4TWixMsQ7kNvgHgepox&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=A2L2MJtV2qej6UVxW5CrhcZ&oh=00_AYDE5UD-4rCZcDQ08OmPnAaRVmt5P8bcks0g4EXMDoNnyg&oe=6764327C',
      festivals: 'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/320530692_5840609896031370_2965782162617521132_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=qZgOvRB3uBkQ7kNvgHU5GdG&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=Ae-wFhQqiDwL9KKd1Ba8I5S&oh=00_AYD5qva1bUTtBWya4Ki7qPWeMjyU05IJbKC0YsZ4se76tw&oe=67643F25',
      maternity: 'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/283059860_1129334880945362_7146449520995384400_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=4_QeGeEKrQ4Q7kNvgHc3oOc&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AdiVisXZAxNrdYkIPz9l-9U&oh=00_AYAwvp-7pBF6jyDGn0SpeJydC2Z2vdANr8qjZ_VuL0U-IA&oe=67645D6D',
    };
   }
  
  getContactImages() {
    return [
      'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/409506193_742078834605956_671846996577550548_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=aJ6pPeNlYaUQ7kNvgGk3FZ7&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AWG1TCxCfI1R612oPo7aS6Z&oh=00_AYBqL_AbuJPgoRLzDZc7agg2JHoMmGh3AQw264Tu3u_cSw&oe=6764583F',
      'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/377498626_690987866381720_809815757712992993_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=o4ueWVhcm38Q7kNvgHgaoGj&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=AIiKDNEjNvwX7m3ysj1fUYC&oh=00_AYCojONUZeDSwegZhmXPXB8mAhwKlqfG7BuejdPRImBnEg&oe=676458DA',
      'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/370722555_681148547365652_1351800536529163436_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=qN4vq_r0o4oQ7kNvgExMfEm&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=Av0zqzq5SYp7hi0p8_7U3A-&oh=00_AYDInmDeI6BCxHUmv1RNHFX_BJl1_oucstS7sMfu5ehMVw&oe=676465FF',
      'https://scontent.fcok4-1.fna.fbcdn.net/v/t39.30808-6/355248960_644861717661002_6796088479068337562_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=VLZTdTfgJbUQ7kNvgFgRMRd&_nc_zt=23&_nc_ht=scontent.fcok4-1.fna&_nc_gid=Abu-7ZCGQjTRUKeDmeHELJT&oh=00_AYC94vx-IENBQBGwTdNtcFCOuaEHTT3NqJi5oxub6-JEMQ&oe=67648B09'
    ];
  }
  
>>>>>>> 89d8ded4a1e11302b504c450a436c62f47871c1e
}
