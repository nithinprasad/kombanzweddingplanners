import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroImageService {

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
  
}
