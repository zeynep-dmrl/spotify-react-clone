# Spotify UI Clone

React + TailwindCss kullanarak Spotify'ın web versiyonun arayüzünün klonudur.

![home](https://github.com/zeynep-dmrl/spotify-react-clone/blob/master/img/home.png) 
![search](https://github.com/zeynep-dmrl/spotify-react-clone/blob/master/img/search.png)
![collection](https://github.com/zeynep-dmrl/spotify-react-clone/blob/master/img/collection.png) 
![fullscreen](https://github.com/zeynep-dmrl/spotify-react-clone/blob/master/img/2022-08-24.png)


## Hooks
- **useMemo()**

Memoization; aynı girdiler için aynı işlevler çağrıldığında işlevin tekrardan çağrılmadan saklanılmış olan sonucun döndülmesine denir. Bu tekniğin React hook'u olarak kullanılmasını sağlayan işlev: ueMemo(). Verilen girdilerin durumlarına göre önceden üretilen sonuçları döndürür.

- **useNavigate()**

Router, SPA uygulamalarda sayfalar arası gezinmek için kullanılan yapıdır. Belirtilen linkler üzerinden ilgili sayfaya geçmeye yardımcı olur. bir React router hook'u olan useNavigate, geçmiş nesnesine erişir ve belirli Url ile ileri veya geri sayfalara gitmeye yardımcı olur.

- **useRef()**

 Dom ögelerine veya react elementlerine erişmemize yardımcı olur. Oluşturulan ref ile js'deki selectorlar gibi dom elelmanlarına erişmeyi sağlar. Ref verilen öge üzreinde gerçeklerşen olayları useRef ile kontrol edilir.


## Events Managements
- **stopPropagation()**

React da bir olay yöneticisinde olay yayılımını durdurmak için gerekli sekilde tetiklenmelidir. stopPropagation() tetiklenen olay zincirini keser. Birbirini etkileyen olaylar tanımlandığında bu etkinin ortadan kaldırılmasında yardımcı olur. Olaylar arasındaki zincir bağı kopar ve birbirlerinin tetiklemesi önlenir.

## Dependencies

 #### Libraries
 
  - **[react-range](https://github.com/tajo/react-range)**
  - **[react-use](https://github.com/streamich/react-use)**
     - *useFullScreen*
     - *useAudio*
  - **[react-indiana-drag-scroll](https://github.com/Norserium/react-indiana-drag-scroll)**
  
  
 #### CSS

   - **Tailwind**

 Özelleştirilebilir yapıya sahip bir CSS framework.

   - **Headless UI**

 Tailwind CSS ile güzel bir şekilde entegre olacak şekilde tasarlanmış, tamamen stilsiz, tamamen erişilebilir UI bileşenleri.
  
 #### State Managements
   - Redux Toolkits
