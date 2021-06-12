// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: paper-plane;
/********************************************************
 ************* MAKE SURE TO COPY EVERYTHING *************
 *******************************************************
 ************ © 2021 Copyright Nicolas-kings ************/
/********************************************************
 * script     : ONE-hotcomments.js
 * version    : 2.6
 * author     : Nicolas-kings
 * date       : 2021-04-05
 * desc       : 具体配置说明，详见微信公众号-曰(读yue)坛
 * github     : https://github.com/Nicolasking007/Scriptable
 * Changelog  : v2.6 - 压缩代码，便于复制
 *              v2.5 - 增加api数据源,遇到接口问题时可自行切换接口源
 *              v2.4 - 修复图片报错的bug
 *              v2.3 - 优化背景逻辑
 *              v2.2 - 优化背景图片缓存处理
                v2.1 - 细节优化，样式调整
                v2.0 - 小组件UI重构
                v1.3 - 支持版本更新、脚本远程下载
                v1.2 - api接口数据增加缓存，应对无网络情况下也能使用小组件
                v1.1 - 替换api接口，修正点击直链播放 改为跳转网易云播放.
                v1.0 - 首次发布
----------------------------------------------- */
//##############公共参数配置模块############## 
const changePicBg = false  //选择true时，使用透明背景 
const ImageMode = true   //选择true时，使用必应壁纸
const previewSize = "medium"  //预览大小 medium、small、large
const colorMode = false // 是否是纯色背景
const bgColor = new Color("000000") // 小组件背景色
const blurStyle = "light" // 高斯样式：light/dark
const Switch_data = false    //  切换网易云热评接口数据源
//##############公共参数配置模块############## 
const _0x51b2=['DMvYC2LVBG','iIa9psaIzgfYAYi7cIaGicaGicaGDMfYigLTywDLrNvUyYa9igLZrgfYAYa/igrHCMTcBhvYidOGBgLNAhrcBhvYoWOGicaGicakicaGicaGicbMB3iGkgXLDcbPpta7igKGpcbWAxGUBgvUz3rOoYbPkZ00ksb7cIaGicaGiaOGicaGicaGicaGlY8Gq29UDMvYDcb0BYbiu0WUcIaGicaGicaGicbSzxqGAhnSid0GCMDIvg9iC2WOCgL4w2LDlhbPEfTPkZfDlhbPEfTPkZjDktSkicaGicaGicaGiaOGicaGicaGicaGlY8GqxbWBhKGDgHLigLTywDLigz1BMn0Aw9UlGOGicaGicaGicaGAhnSid0GAw1Hz2vgDw5JkgHZBcK7cIaGicaGicaGcIaGicaGicaGicaVlYbdB252zxj0igjHy2SGDg8GuKDclGOGicaGicaGicaGy29UC3qGCMDIid0GAhnSvg9sz2iOAhnSwZbDlcbOC2XBmv0SigHZBfSYxsK7cIaGicaGicaGcIaGicaGicaGicaVlYbqDxqGDgHLihzHBhvLCYbIywnRigLUDg8GDgHLigrHDgeUcIaGicaGicaGicbWAxHBAv0GpsbYz2jBmf07cIaGicaGicaGicbWAxHBAsSXxsa9ihjNyLSXxtSkicaGicaGicaGihbPEfTPkZjDid0GCMDIwZjDoWOGicaGicakicaGicaGicb9cIaGicaGiaOGicaGicaGic8VierYyxCGB3zLCIb0AguGB2XKigLTywDLlGOGicaGicaGignVBNrLEhqUChv0sw1Hz2veyxrHkgLTywDLrgf0ysWWldaPoWOGicaGicakicaGicaGicaVlYbcBhvYihrOzsbPBwfNzs4kicaGicaGicbZDgfJA0jSDxjdyw52yxnsr0iOiM1HAw5dyw52yxmIlcaWlcaWlcb3lcbOlca','buOCWR5BECknW74h','Bg9HzePtt04','5lMp6zsBFEwmSUI/VW','57UZ57IhoUw1NoAFHUAlVUwzHCoc','zhjHD0LTywDLsw5szwn0','Dg9cyxnLnJrtDhjPBMC','imk344ck','Dgv4DenVBg9Y','W7RdPCoPW4VcRCoHrq','y29UC3rYDwn0B3i','gSklzCkmA8o+WOS3bGhdMa','Bg9HzeHutuW','wYTD54Mi5PYS5l+H5OgV6i635y+w5OIq5yQF','wCohxCkDnSkizCopq8kXbXi','abRdJ8k1BCo5nuWw','WRFdKSo2W5viWPhdMNFcK8o3W5Sn','yxbWBhK','omo4bsOe','i2jMyMzIzG','ChjLC2vUDefSzxj0','W4xdHdSaW4dcIW','y29TCgXLDgu','ChjLC2vUDe1LzgL1Bq','ntu5nJiYAvbsEhDY','eKLUke3cJSkBW7aTkIVcVG3dM8oj','WRuIWQTNagZcNHWSW6xcGSoPWOxcQSkV','zNjVBujHC2u2nfn0CMLUzW','WQvRW7BdThddGJBcKNS','AgvPz2H0','z2v0sw1Hz2u','kLtdNg7cHW','f8oImbeC','W7ZcQHu+WRvykW','6ycp5PIo6iom5PMV','fmk1FmkhysdcJ13dHCoqWRK','y2vUDgvYqwXPz25uzxH0','5yMw5l6g55Q05BoN57Us5lQZW4eJWPNcNG','CMLNAhq','4Okt4OgAWOJOR4BORktMNyJOHyG','x0GEaWZdSSkVWO3dLG','WPTsWObEfmo6ASoC','W4fxWQ9sW4u','ChjLC2vUDa','wYTD6ygh5yIW6zEU6Aky77Ym6k+35yMn5B6a5ywS5lYx5y+377YA5PUW5z2BiowpJEMMIa','5zU+54Mh5yQG6l295AsX6lsL77YA','W7PdadW','5OkO5OoZ5A6d5zYO5lUa5lMi5l2n572U77YF','WOPEWPXph8oIr8ovWOijkHNdJJuqiCkJW6q','WPTyWPjE','hSkaF8kmA8oaWRKQarS','AmoKW5S','W4dcPmon','cIaGDMfYig11Bf90ywjSzt1BnteYlduXmIW0ntySnteYldmYocW0ntySmZm1lduXmIW0mduSmZi4ldi3msW0ntySmZG4ldmZnsWYotiSnteYldq1ncW0mduSmZy0ldmYocWYotGSmJCXldq5nIW0ntySndiWldm4ocWZnJaSmZm1ldmXmIWYotiSmJCZlduXmIW0odiSndu0ldqYocW0mduSmZGZldm2ncWZnduSmZi4ldmXmIWYotGSmJG0ldi3msWYntKSndK2ldq3nsW0ntySndm3ldqYmcW0mdqSmZG4ldm3ncWZnJaSmZq3ldmZnsWZmJmSmZeYldmWmIWYotiSmJGYldi3mYWYnJuSnteYldq5nYW0odiSndy4ldq1ncW0ndeSndi4ldqXnYW0mduSmZK0ldm4mYWZnZmSmZy0ldm1ncWZnduSmZm3ldmYocWZmJaSmZeYldmWnsWYotGSmJKXldi4ncWYnZGSmJCXldi2nsWYntKSnta3ldq5nIW0oduSndC1ldq2nsW0ntySndq2ldqZnYW0mJGSndiWldqXmIW0mdqSmZK2ldm4ocWZodeSmZC0ldm2nYWZnJaSmZu0ldm0nYWZndeSmZm1ldmYosWZmJmSmZe4ldmXmIWZmdCSmZaYldi5nYWYotiSmJG3ldi4mIWYnZGSmJCZldi2osWYnJuSmJyXlduXmIW1mduSndK3ldq4osW0odiSndC1ldq2ocW0nJeSndu0ldq0nYW0ndeSndm1ldqYocW0mJiSnde3ldqXmsW0mduSmZK5ldm5ncWZodKSmZGZldm3ocWZnZmSmZy4ldm2ncWZntKSmZu0ldm1mcWZnduSmZqXldmZnYWZmZiSmZi4ldmYncWZmJaSmZe2ldmXmIWZmdKSmZa1ldmWmsWYotGSmJK0ldi5msWYodCSmJG0ldi4msWYnZGSmJC0ldi3msWYnJGSmJy1ldi2mIWYntKSmJu3lduWnYW1mdeSndK2ldq5msW0oduSndGWldq3nsW0nZaSndy1ldq2mcW0ntySnduXldq0nIW0ndiSndm3ldqZmYW0mJGSndi0ldqYmcW0mtySndeYldqWocW0mdqSndaWldm5nIWZotiSmZG4ldm4nsWZodeSmZC3ldm3ncWZnZaSmZy3ldm2mYWZnJaSmZu3ldm1ncWZntaSmZq3ldm0ncWZndeSmZm4ldmZnsWZmZiSmZi5ldmYnIWZmJmSmZiWldmXocWZmtuSmZeYldmXmcWZmdCSmZa0ldmWmIWYotKSmJK3ldi5ncWYotiSmJG5ldi4nYWYoduSmJGYldi4mcWYnZGSmJC1ldi3mYWYnZeSmJy5ldi2nYWYnJuSmJyZldi2msWYntLDo3zHCIbZAgDFDgfIBgu9wZKSmteSmtiSmtmSmtmSmtqSmtqSmtuSmtuSmtuSmtuSmtySmtySmtySmtySmtCSmtCSmtCSmtCSmtCSmtCSmtCSmtGSmtGSmtGSmtGSmtGSmtGSmtGSmtGSmtGSmtKSmtKSmtKSmtKSmtKSmtKSmtKSmtKSmtKSmtKSmtKSmtKSmtKSmtKSmJaSmJaSmJaSmJaSmJaSmJaSmJaSmJaSmJaSmJaSmJaSmJaSmJaSmJaSmJaSmJaSmJaSmJaSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJeSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJiSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJmSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJqSmJrDo2z1BMn0Aw9Uihn0ywnRqMX1CKnHBNzHC1jhqIHPzcX0B3bFEcX0B3bFEsX3Awr0AcXOzwLNAhqSCMfKAxvZkxTPzIHPC05HtIHYywrPDxmPFhXYywrPDxm8msLYzxr1CM47CMfKAxvZFd0Wo3zHCIbJyw52yxm9zg9JDw1LBNqUz2v0rwXLBwvUDej5swqOAwqPo3zHCIbJB250zxH0pwnHBNzHCY5NzxrdB250zxH0kciYzciPo3zHCIbPBwfNzurHDge7Dhj5E3rYExTPBwfNzurHDge9y29UDgv4Dc5NzxrjBwfNzurHDgeODg9Wx3GSDg9Wx3KSD2LKDgGSAgvPz2H0kx1JyxrJAcHLkxT0CNL7BMv0C2nHCguUC2vJDxjPDhKUuhjPDMLSzwDLtwfUywDLCI5LBMfIBgvqCML2AwXLz2uOiLvUAxzLCNnHBejYB3DZzxjszwfKiIK7Aw1Hz2veyxrHpwnVBNrLEhqUz2v0sw1Hz2veyxrHkhrVCf94lhrVCf95lhDPzhrOlgHLAwDODcL9y2f0y2GOzsL7ywXLCNqOiKnHBM5VDcbHy2nLC3mGBg9JywWGAw1Hz2uIktT0AhjVDYbUzxCGrxjYB3iOiNvUywjSzsb0BYbHy2nLC3mGBg9JywWGAw1Hz2uGzgf0ytOGiITLktTYzxr1CM59Fx1JyxrJAcHLkxTHBgvYDcGIq2fUBM90igfJy2vZCYbPBwfNzsiPo3rOCM93ig5LDYbfCNjVCIGIDw5HyMXLihrVigfJy2vZCYbPBwfNzsbKyxrHoIaIk2uPo312yxiGCgL4zwXZpwLTywDLrgf0ys5KyxrHo3zHCIb4lhKSAsXWlhLWlhLPlhL3lhjFC3vTlgDFC3vTlgjFC3vTlhjFB3v0x3n1BsXNx291Df9ZDw0SyL9VDxrFC3vTlhjFAw5FC3vTlgDFAw5FC3vTlgjFAw5FC3vTlhbYlhbNlhbIlhjICZT2yxiGzgL2pxjHzgL1CYTYywrPDxmRmtT2yxiGDZq9D2LKDgG8pdi7DMfYihDPzhrOtwLUDxmXpxDPzhrOlte7DMfYigHLAwDODe1PBNvZmt1OzwLNAhqTmtT2yxiGCMfKAxvZugX1CZe9CMfKAxvZkZe7DMfYihn1BuzHy3rVCJ1YywrPDxnqBhvZmsOOCMfKAxvZugX1CZeRmsKVmJT2yxiGC3rHy2TtDgfYDd1UzxCGqMX1CLn0ywnRkcK7DMfYihn0ywnRpxn0ywnRu3rHCNq7zM9YkgK9mtTPpgrPDJTPkYSPE3n0ywnRpxn0ywnRlM5LEhq9BMv3iejSDxjtDgfJAYGPo2LMkgK9pxjHzgL1C1bSDxmXkxzHCIbZDgfJA0vUzd1ZDgfJA31ZDgfJAY5UzxH0pxn0ywnRu3rHCNq7DMfYihn0ywnRsw49BNvSBdT2yxiGC3rHy2TpDxq9BNvSBdT5DZ15At0Wo3zHCIbTDwXFC3vTpw11Bf90ywjSzvTYywrPDxnDo3zHCIbZAgDFC3vTpxnOz190ywjSzvTYywrPDxnDo2zVCIH5pta7EtXOzwLNAhq7EsSRkxTYx2LUx3n1Bt1Nx2LUx3n1Bt1Ix2LUx3n1Bt1Yx3n1Bt1Nx3n1Bt1Ix3n1Bt0Wo3jFB3v0x3n1Bt1YywrPDxnqBhvZmsOOChi9CgL4zwXZw3LPxsK7z19VDxrFC3vTpxjHzgL1C1bSDxmXkIHWzZ1WAxHLBhnBEwKRmv0Po2jFB3v0x3n1Bt1YywrPDxnqBhvZmsOOCgi9CgL4zwXZw3LPkZjDktTYx3n1BsS9C3vTrMfJDg9YkNbYo2DFC3vTkZ1ZDw1gywn0B3iQCgC7yL9ZDw0Rpxn1BuzHy3rVCIPWyJTZDgfJAZ1ZDgfJA1n0yxj0o2zVCIHPpta7AtXYywrPDxnqBhvZmtTPkYSPE3n0ywnRlNi9Chi7C3rHy2SUzZ1WzZTZDgfJAY5IpxbIo3n0ywnRpxn0ywnRlM5LEhr9zM9YkgK9mtTPphjHzgL1C1bSDxmXo2KRkYL7Cd15AsSOkhDPzhrOtwLUDxmXpgK/D2LKDgHnAw51CZe6AsK8pdiPo3jFC3vTkZ0OC3rHy2SUCJ0OChi9CgL4zwXZw3bDksKQkhjICZ1YywrPDxnqBhvZms1PktTNx3n1BsS9khn0ywnRlMC9khbNpxbPEgvSC1TWkZfDksKQCMjZo2jFC3vTkZ0OC3rHy2SUyJ0OCgi9CgL4zwXZw3aRmL0PksPYyNm7CL9PBL9ZDw0RpxbYo2DFAw5FC3vTkZ1WzZTIx2LUx3n1BsS9Cgi7C3rHy2S9C3rHy2SUBMv4Dh1ZDgfJA0LUpxn0ywnRu3rHCNq7C3rHy2TpDxq9C3rHy2TfBMq7zM9YkhG9mdT4phDPzhrOo3GRkYL7CgL4zwXZw3LPxt0OCL9ZDw0QBxvSx3n1BsK+pNnOz19ZDw07CgL4zwXZw3LPkZfDpsHNx3n1BsPTDwXFC3vTkt4+C2HNx3n1BtTWAxHLBhnBEwKRmL09kgjFC3vTkM11Bf9ZDw0PpJ5ZAgDFC3vTo3jFC3vTlt1Yx291Df9ZDw07z19ZDw0TpwDFB3v0x3n1BtTIx3n1Bs09yL9VDxrFC3vTo3jFB3v0x3n1Bs09C3rHy2TjBI5Yo2DFB3v0x3n1Bs09C3rHy2TjBI5No2jFB3v0x3n1Bs09C3rHy2TjBI5Io3a9khL3kYGOCd14k3jHzgL1CYSXktX3Awr0Ae1PBNvZmt9WoNDPzhrOtwLUDxmXksK8pdi7CL9PBL9ZDw0RpsHZDgfJA0LUlNi9CgL4zwXZw3bDktTNx2LUx3n1BsS9khn0ywnRsw4UzZ1WAxHLBhnBCcSXxsK7yL9PBL9ZDw0RpsHZDgfJA0LUlMi9CgL4zwXZw3aRmL0Po3jFC3vTkZ1Yx2LUx3n1BtTNx3n1BsS9z19PBL9ZDw07yL9ZDw0RpwjFAw5FC3vTo3n0ywnRsw49C3rHy2TjBI5UzxH0o3jFB3v0x3n1BsS9khbYpxn0ywnRt3v0lNiPo2DFB3v0x3n1BsS9khbNpxn0ywnRt3v0lMCPo2jFB3v0x3n1BsS9khbIpxn0ywnRt3v0lMiPo3jFAw5FC3vTlt1WCJTNx2LUx3n1Bs09CgC7yL9PBL9ZDw0TpxbIo3n0ywnRt3v0pxn0ywnRt3v0lM5LEhq7EwKRptr9ExCRpxDPzhrOFwzVCIH4pta7EdX3Awr0AdT4kYSPE2DFAw5FC3vTpwjFAw5FC3vTpxjFAw5FC3vTpwDFC3vTpwjFC3vTpxjFC3vTpta7EwK9EdW8mJTYx291Df9ZDw09CMfKAxvZugX1CZeQkhbYpxbPEgvSC1T5Av0Po2DFB3v0x3n1Bt1YywrPDxnqBhvZmsOOCgC9CgL4zwXZw3LPkZfDktTIx291Df9ZDw09CMfKAxvZugX1CZeQkhbIpxbPEgvSC1T5AsSYxsK7CL9ZDw0Rpxn1BuzHy3rVCIPWCJTNx3n1BsS9C3vTrMfJDg9YkNbNo2jFC3vTkZ1ZDw1gywn0B3iQCgi7C3rHy2S9C3rHy2TtDgfYDdTMB3iOAt0Wo2K8CMfKAxvZugX1CZe7AsSRkxTZDgfJAY5YpxbYo3n0ywnRlMC9CgC7C3rHy2SUyJ1WyJTZDgfJAZ1ZDgfJAY5UzxH0FxLWpxDPzhrOo2zVCIHPpte7AtW9CMfKAxvZo2KRkYL7EwK9khLWk3GPpdWYo3jFC3vTkZ0OC3rHy2SUCJ0OChi9CgL4zwXZw3LPxsKPkIHYyNm9CMfKAxvZugX1CZeTAsK7z19ZDw0RpsHZDgfJAY5NpsHWzZ1WAxHLBhnBEwKRmv0PksPYyNm7yL9ZDw0RpsHZDgfJAY5IpsHWyJ1WAxHLBhnBEwKRmL0PksPYyNm7CL9PBL9ZDw0RpxbYo2DFAw5FC3vTkZ1WzZTIx2LUx3n1BsS9Cgi7C3rHy2S9C3rHy2SUBMv4DdTPzIHPpgHLAwDODe1PBNvZmsL7ExaRpxDPzhrOFx15At14o3n0ywnRsw49C3rHy2TtDgfYDdTZDgfJA091Dd1ZDgfJA0vUzdTMB3iOEt0Wo3K8AgvPz2H0o3KRkYL7Cd15AtW8mJTWAxHLBhnBCf09khjFC3vTkM11Bf9ZDw0PpJ5ZAgDFC3vTo3bPEgvSC1TWkZfDpsHNx3n1BsPTDwXFC3vTkt4+C2HNx3n1BtTWAxHLBhnBCcSYxt0OyL9ZDw0QBxvSx3n1BsK+pNnOz19ZDw07CL9ZDw0TpxjFB3v0x3n1BtTNx3n1Bs09z19VDxrFC3vTo2jFC3vTlt1Ix291Df9ZDw07CL9VDxrFC3vTlt1ZDgfJA0LUlNi7z19VDxrFC3vTlt1ZDgfJA0LUlMC7yL9VDxrFC3vTlt1ZDgfJA0LUlMi7Cd0OEcSOkcHWpxKRCMfKAxvZugX1CZePpgHLAwDODe1PBNvZmt9WoMHLAwDODe1PBNvZmsKQD2LKDgGPktW8mJTYx3n1BsS9khjFAw5FC3vTkZ0OC3rHy2TjBI5YpxbPEgvSC1TWxsKPo2DFC3vTkZ0Oz19PBL9ZDw0RpsHZDgfJA0LUlMC9CgL4zwXZw3aRmv0PktTIx3n1BsS9kgjFAw5FC3vTkZ0OC3rHy2TjBI5IpxbPEgvSC1TWkZjDksK7C3rHy2TjBJ1ZDgfJA0LUlM5LEhq7CL9VDxrFC3vTkZ0OChi9C3rHy2TpDxqUCIK7z19VDxrFC3vTkZ0OCgC9C3rHy2TpDxqUzYK7yL9VDxrFC3vTkZ0OCgi9C3rHy2TpDxqUyIK7CL9PBL9ZDw0TpxbYo2DFAw5FC3vTlt1WzZTIx2LUx3n1Bs09Cgi7C3rHy2TpDxq9C3rHy2TpDxqUBMv4DdT5AsS9D2LKDgH9FwnVBNrLEhqUChv0sw1Hz2veyxrHkgLTywDLrgf0ysX0B3bFEcX0B3bFEsL9zNvUy3rPB24GqMX1CLn0ywnRkcL7DgHPCY5Ypta7DgHPCY5Npta7DgHPCY5Ipta7DgHPCY5Hpta7DgHPCY5UzxH0pw51BgX9cIaGicaGicaGlY8GAhr0Chm6lY9NAxn0lMDPDgH1yI5JB20VBwPHy2TZB24VntmXmti1nGOGicaGicakicaGicaGicbMDw5JDgLVBIbYz2juB0HZBcHYlcbNlcbIkxSkicaGicaGicaGicaGCIaVpsaYntuSigCGlZ0GmJu1lcbIic89idi1ntSkicaGicaGicaGicaGDMfYig1HEca9ie1HDgGUBwf4khiSigCSigiPlcbTAw4GpsbnyxrOlM1PBIHYlcbNlcbIktSkicaGicaGicaGicaGDMfYigGSihmSigWGpsaOBwf4icSGBwLUksaVidi7cIaGicaGiaOGicaGicaGicaGicbPzIHTyxGGpt0GBwLUkxSkicaGicaGicaGicaGicaGigGGpsbZid0GmdSGlY8GywnOCM9TyxrPyWOGicaGicaGicaGicb9zwXZzxSkicaGicaGicaGicaGicaGihzHCIbKid0GBwf4ic0GBwLUoWOGicaGicaGicaGicaGicaGCYa9igWGpIaWlJuGpYbKic8GkdiGlsbTyxGGlsbTAw4PidOGzcaVicHTyxGGkYbTAw4PoWOGicaGicaGicaGicaGicaGC3DPDgnOkg1HEcL7cIaGicaGicaGicaGicaGicaGicaGy2fZzsbYoIbOid0GkgCGlsbIksaVigqGkYaOzYa8igiGpYa2idOGmcK7igjYzwfRoWOGicaGicaGicaGicaGicaGicaGignHC2uGzZOGAca9icHIic0GCIKGlYbKicSGmJSGyNjLywS7cIaGicaGicaGicaGicaGicaGicaGy2fZzsbIoIbOid0GkhiGlsbNksaVigqGkYa0oYbICMvHAZSkicaGicaGicaGicaGicaGih0kicaGicaGicaGicaGicaGigGGlZ0GnJSkicaGicaGicaGicaGFqOGicaGicakicaGicaGicaGicaGCMv0DxjUifTOlcbZlcbSxtSkicaGicaGicb9cIaGicaGiaOGicaGicaGigz1BMn0Aw9UigHZBfrVuMDIkgGSihmSigWPEWOGicaGicaGicaGicb2yxiGCIWGzYWGyJSkicaGicaGcIaGicaGicaGicaGigLMkhmGpt0GmcL7cIaGicaGicaGicaGicaGicbYid0GzYa9igiGpsbSoYaVlYbHy2HYB21HDgLJcIaGicaGicaGicaGih1LBhnLEWOGicaGicaGicaGicaGicaGDMfYigH1ztjYz2iGpsbMDw5JDgLVBIbODwuYCMDIkhaSiheSihqPEWOGicaGicaGicaGicaGicaGicaGigLMkhqGpcaWksb0icS9ide7cIaGicaGicaGicaGicaGicaGicaGAwyODca+idePihqGlt0GmtSkicaGicaGicaGicaGicaGicaGicbPzIH0idWGms82ksbYzxr1CM4GCcaRicHXic0GCcKGkIa2icOGDdSkicaGicaGicaGicaGicaGicaGicbPzIH0idWGms8YksbYzxr1CM4GCtSkicaGicaGicaGicaGicaGicaGicbPzIH0idWGmI8ZksbYzxr1CM4GCcaRicHXic0GCcKGkIaOmI8Zic0GDcKGkIa2oWOGicaGicaGicaGicaGicaGicaGihjLDhvYBIbWoWOGicaGicaGicaGicaGicaGFqOGicaGicakicaGicaGicaGicaGicaGihzHCIbXid0GBca8idaUnsa/igWGkIaOmsaRihmPidOGBcaRihmGlsbSicOGCZSkicaGicaGicaGicaGicaGihzHCIbWid0GmIaQigWGlsbXoWOGicaGicaGicaGicaGicaGCIa9igH1ztjYz2iOCcWGCsWGAcaRideVmYK7cIaGicaGicaGicaGicaGicbNid0GAhvLmNjNyIHWlcbXlcbOktSkicaGicaGicaGicaGicaGigiGpsbODwuYCMDIkhaSiheSigGGlsaXlZmPoWOGicaGicaGicaGicb9cIaGicaGiaOGicaGicaGicaGicbYzxr1CM4Gw01HDgGUCM91BMqOCIaQidi1nsKSie1HDgGUCM91BMqOzYaQidi1nsKSie1HDgGUCM91BMqOyIaQidi1nsLDoWOGicaGicaGih0kicaGicaGicakicaGicaGicbMDw5JDgLVBIbSAwDODejSDxiOAhnSksb7cIaGicaGicaGcIaGicaGicaGicaVlYbbzgP1C3qGDgHLigX1BwLUyw5Jzs4kicaGicaGicaGigXLDcbSDw1dywXJid0Gmc4ZnsaRicGWlJmGlYbOC2XBmL0PoWOGicaGicaGicaGAwyGkgX1BunHBgmGpcaXksb7igX1BunHBgmGpsaXoYb9cIaGicaGicaGicbLBhnLigLMicHSDw1dywXJid4GmY4Zksb7igX1BunHBgmGpsaZlJm7ih0kicaGicaGicaGignVBNn0igWGpsbOC2XBmL0GkIbSDw1dywXJoWOGicaGicaGicaGcIaGicaGicaGicaVlYbbzgP1C3qGDgHLihnHDhvYyxrPB24UiaOGicaGicaGicaGy29UC3qGy29SB3jMDwWGpsaYicOGAhnSwZfDicOGBdSkicaGicaGicaGignVBNn0ihmGpsbOC2XBmv0GkIbJB2XVCMz1BcaQideUntSkicaGicaGicaGiaOGicaGicaGicaGCMv0DxjUifTOC2XBmf0SCYXSxtSkicaGicaGicaGiaOGicaGicaGih0kicaGicaGicakicaGicaGicbMDw5JDgLVBIbKyxjRqMX1CIHOC2WPihSkicaGicaGcIaGicaGicaGicaVlYbbzgP1C3qGDgHLihnHDhvYyxrPB24UiaOGicaGicaGicaGy29UC3qGy29SB3jMDwWGpsaYicOGAhnSwZfDicOGAhnSwZjDoWOGicaGicaGicaGy29UC3qGCYa9igHZBfSXxsaQicGXic0GAhnSwZjDksaQidm7cIaGicaGicaGicakicaGicaGicaGihjLDhvYBIbBAhnSwZbDlhmSAhnSwZjDxtSkicaGicaGicaGiaOGicaGicaGih0kicaGicaGcIaGicaGicaGlY8Gu2v0ihvWihrOzsbJyw52yxmUcIaGicaGicaGy29UC3qGAw1Nid0Gzg9JDw1LBNqUz2v0rwXLBwvUDej5swqOiMjSDxjjBwCIktSkicaGicaGicbJB25ZDcbJyw52yxmGpsbKB2n1BwvUDc5NzxrfBgvTzw50qNLjzcGIBwfPBKnHBNzHCYiPoWOGicaGicakicaGicaGicbJB25ZDcb3id0GAw1NlM5HDhvYywXxAwr0AdSkicaGicaGicbJB25ZDcbOid0GAw1NlM5HDhvYywXizwLNAhq7cIaGicaGiaOGicaGicaGignHBNzHCY5ZDhLSzs53Awr0AcaGpsb3icSGiNb4iJSkicaGicaGicbJyw52yxmUC3r5BguUAgvPz2H0id0GAcaRicjWEci7cIaGicaGicaGy2fUDMfZlNDPzhrOid0GDZSkicaGicaGicbJyw52yxmUAgvPz2H0id0GAdSkicaGicaGcIaGicaGicaGy29UC3qGy29UDgv4Dca9ignHBNzHCY5NzxrdB250zxH0kciYzciPoWOGicaGicaGignVBNrLEhqUy2XLyxjszwn0kcaWlcaWlcb3lcbOicK7cIaGicaGicaGy29UDgv4Dc5KCMf3sw1Hz2uOigLTzYWGmcWGmcaPoWOGicaGicaGiaOGicaGicaGic8VieDLDcb0AguGAw1Hz2uGzgf0ysbMCM9TihrOzsbJB250zxH0lGOGicaGicaGihzHCIbPBwfNzurHDgeGpsbJB250zxH0lMDLDeLTywDLrgf0ysGWldaSDYXOktSkicaGicaGicb2yxiGCgL4id0GAw1Hz2veyxrHlMrHDge7cIaGicaGicaGcIaGicaGicaGDMfYigLZrgfYAYa9ici','nteZmZe3EgHzzu5o','BM90zxm','WOyAdmkVWPJdVYe','yMfJA2DYB3vUzenVBg9Y','dSkol8kMiW','us/dHHuTWPRdUColma','t8obt+ImMEwmMEEaUEITV+AlU+wlMh4','ACoxWQfx','6ywt572l5PsJ5Qki','ChjLC2vUDeXHCMDL','eHVdN8kJz8oPo0ym','BwLUAw11BvnJywXLrMfJDg9Y','zxzHBhvHDgvkyxzHu2nYAxb0','hSkqDSkD','WQ3cQri8WPPtlmobW40','cv5MngVcLmkeWQvW','dvj9nvRcLW','ashdHdWkWOxdHa','6Ag26yoOiow3PUI+Uq','5BQv6yoOiow3PUI+Uq','AM9PBLbHDgG','5Oot55Ij5BgC6yky5lQg6ict5PIY5BA05yAw5Aw/5BcS57Iv','5zU+54Mh6ycj5OUP','mZmYmJvSzKfmt3a','BMfTzq','6k6m54c05yAO5BAw5lM66ksngsK+hEwUKEAlR++8MoMgI+AwLoI9SEwhJ+IgJ+AFL+wmO+wmTCkc','Ahr0CdOVl211C2LJlJe2mY5JB20VC29UzY9TzwrPys9VDxrLCI91CMW/Awq9','WRVcNSo4WPhdIfxdMa','fLSwWP5IDSk5W7irWQaEcq','D2LKDgG','W7r8W6GvxtlcGrO2W6/cOSot','zgf0yq','zNjVBuzPBgu','DmoCWOXFW7RcVLpcOWNdI8klFCkbFZi','ywrKu3bHy2vY','gXRdKSkfBmoP','y29UDgvUDa','nCoMW7HfpmkvWO4','W67dI8kgpCk6WOhdUHdcHg/cHW','4Ocu4OcuioIVHoIUUUADPEIhQG','C29Uz1bPyW','B3jWAgv1C3DPzgDLDdOVlW','zNjVBvborW','ySoRW7z1c8odW5ZcVSklW7q','tmoGWQagW7FcMeRcOqhdGW','odi3nZy3yKfxB2HW','56Ul5y2Z5PU05PAW','nZC0nJeYwe56AuXX','bXO3WQ06EW','yM90Dg9T','W5hcHmkKW6pcQ8ozb8kh','W6NdMmkDoSk6','WR7cI8owW5hdPW','yM9YzgvYv2LKDgG','DxjS','dCoOiqmzWRaZAX4Z','ywrKvgv4Da','WRldNCo0W5bmWPldQ3FcO8odW6Wc','wYTD5OMN6kgm5PU05PAW5Q2L6AQK','C3bSAxq','Dg9W','WRFcTSoKW4K','WQGGWRPbcvBcKaGk','W73dNmk6W47cIG','C29Uz0LK','5Aw955Qe77Yb5OIr546W5zYO5y675OIQ5zU+','zMLSzw5HBwu','BgLNAhrtExn0zw1gB250','pupdGSkncYP6','xIHBxIbDkYGGk1TEif0RksSPk1TEif19','W7BcL8kQWPiAW6VdSxNcTCo3','yxzHDgfY','W5VdNLddRCkSAs01aa','yCo8W7jXaCo4W5dcRCkvW5xcN8o8qxCrgJJdJW','ywrKu3rHy2S','zM9UDa','lMPWzW','yMfJA2DYB3vUzeLTywDL','WOnwCmkzeq','D3H1CMW','x8oZWR0t','cSo/WO09W73cHve','W5FcUCotc2P6bSoYaJiw','W4mjk8oiqsRcRSkYz14z','W60HW4fSW45mW5zs','W61sgdtcUa','Bg9JywW','fMNcN8k6','Bg9HzeLTywDL','o8oXBEInN+wpGoEiJEAFKEs/V+AdI+wMKUI3UE+8S+s/HEEvG+E+PowVKUAuP+ApNW','dXSIW6a','yxzHDgfYDxjS','WQBcJCobW5ZdRG','yMXHy2S','zg9JDw1LBNrZrgLYzwn0B3j5','t05flwHVDgnVBw1LBNrZ','xSobo8oopCkDWOGQhJ7dNLe','bXddICkwA8o0iuXmW4m3BHS','5OkO55Qe5Bcp6yoO5lU26iom5PMV5BEY5yEg5Ash5BcX57UQ77Ym6yca5yE65yIW5Qgm6z2I6Ake6kEi44cc','C2L6zq','W78ZWQlcOW7cNbhcML8DvHm','5Okd5lYr5lIO6yg+5OQM5lIB6z6DWOVdTmoIWOzeW7tLS7VLUjFMI5/LMQ/NMQVLMAlLGBlVVQFMIAhOGldKUjJML7xMJkpMG6FNMl3cQ8oXtSoYqH/JGRFORzZKVBVNL4BLHllKU5hLMzlLGyJLHjZOR4RKUjVMRQNdRG','WRldJSkJWQtcGJ0','Ag90y29TBwvUDhmTtKS','5BQv6yoOiowpS+I+Uq','WPfEFCkZgsFcR8kw','c8kly8kvqSoeWP03dH3dHG','wYTD5PYa5PAW54Mi5PYS77YA','qI7dGZaDWPRdOSonmb0','C0ddL8kydcT5','DCopW4ebW7pdNIldR1THatDFWQiu','ywrKsw1Hz2u','5zUQ54QT5QIZ5B6H5PEG5O+v55Md5ywN54sG54Idt+IdQEAzMUMdKoAzPW','p03dNgVcOCkoWR3cGq','r0iffIm','W7tdLJnIWRLRhKiV','ymoQW4HR','W6NdI8kkoSk6WRZdUJhcGgdcJfG','iIaVpGOGicaGicaGidXJyw52yxmGAwq9iM1HAw5dyw52yxmIic8+cIaGicaGicaG','Ahr0Chm6lY9HCgKUBxv4AwfVz3vVlMnUl2fWAs8XnJnYzxbPBMC','5OcX5Ogk6kwU5yMs5BIL5lIs5lUg5Bgy5AYv55Qf5BoV6yoC5lIZ772f','D8oIW4zV','wYTD5Qoa5Rwl5yIW5PYj5PAW54Mi5PYS77Yb','6yca5yE6koAYOEACIEAiQUwBVIK','BCouW5uDW74','mSo2cZOnymoSW4tdQx4uhmkeW6RcGMWiW6a','W7BcIG/LVltLI6xNIRFMNjpLTRNMM6BMNRlMLi0'];const _0xa7b1f3=_0x5cff,_0x38ac6b=_0x3c39;(function(_0x328a98,_0x11d174){const _0x4b016a=_0x3c39,_0x535a58=_0x5cff;while(!![]){try{const _0x4bbcf8=parseInt(_0x535a58(0xe1,'82P3'))*-parseInt(_0x535a58(0x9f,'DB6p'))+-parseInt(_0x535a58(0xc7,'VSVI'))+-parseInt(_0x535a58(0xf2,'Jl08'))+-parseInt(_0x4b016a(0x126))+-parseInt(_0x4b016a(0x8e))*-parseInt(_0x535a58(0xdf,'*wYR'))+parseInt(_0x4b016a(0xbb))+parseInt(_0x4b016a(0xbd));if(_0x4bbcf8===_0x11d174)break;else _0x328a98['push'](_0x328a98['shift']());}catch(_0x480ac5){_0x328a98['push'](_0x328a98['shift']());}}}(_0x51b2,0x70446));const filename=Script[_0x38ac6b(0xa6)]()+_0x38ac6b(0xda),files=FileManager[_0xa7b1f3(0xc2,'vYs2')](),path=files[_0xa7b1f3(0xe2,'5k5b')](files[_0xa7b1f3(0x10b,'$N2v')](),filename),padding={'top':0xa,'left':0xa,'bottom':0xa,'right':0xa},versionData=await getversion();let needUpdated=await updateCheck(2.6);const hotcommentsData=await getData(),widget=await createWidget();if(!colorMode&&!ImageMode&&!config[_0xa7b1f3(0xaa,'F&s7')]&&changePicBg){const okTips=_0xa7b1f3(0xa3,'^xlI');let message=_0xa7b1f3(0xfe,'Ku$f'),options=[_0x38ac6b(0xa4),_0x38ac6b(0x130),_0xa7b1f3(0x96,'jI&H')],response=await generateAlert(message,options);if(response==0x0){let img=await Photos['fromLibrary']();message=okTips;const resultOptions=['好的'];await generateAlert(message,resultOptions),files[_0xa7b1f3(0xb9,'^^N$')](path,img);}response==0x2&&Safari[_0xa7b1f3(0x95,'wf26')](versionData['ONE-hotcomments'][_0x38ac6b(0xdd)]);if(response==0x1){message='以下是【透明背景】生成步骤，如果你没有屏幕截图请退出，并返回主屏幕长按进入编辑模式。滑动到最右边的空白页截图。然后重新运行！';let exitOptions=[_0xa7b1f3(0x112,'Ku$f'),_0x38ac6b(0x109)],shouldExit=await generateAlert(message,exitOptions);if(shouldExit)return;let img=await Photos[_0xa7b1f3(0xf8,'sn7V')](),height=img[_0xa7b1f3(0x13f,'PVCs')][_0x38ac6b(0x12b)],phone=phoneSizes()[height];if(!phone){message=_0xa7b1f3(0xf3,'*p*8'),await generateAlert(message,[_0x38ac6b(0xcf)]);return;}message=_0xa7b1f3(0x106,'XRFq');let sizes=['小号','中号','大号'],size=await generateAlert(message,sizes),widgetSize=sizes[size];message=_0x38ac6b(0x13d),message+=height==0x470?'\x20(请注意，您的设备仅支持两行小部件，因此中间和底部选项相同。)':'';let crop={'w':'','h':'','x':'','y':''};if(widgetSize=='小号'){crop['w']=phone['小号'],crop['h']=phone['小号'];let positions=[_0x38ac6b(0xa0),'顶部\x20右边','中间\x20左边',_0xa7b1f3(0x111,'SKGC'),_0x38ac6b(0xa1),_0x38ac6b(0xf6)],position=await generateAlert(message,positions),keys=positions[position][_0x38ac6b(0xc9)]('\x20');crop['y']=phone[keys[0x0]],crop['x']=phone[keys[0x1]];}else{if(widgetSize=='中号'){crop['w']=phone['中号'],crop['h']=phone['小号'],crop['x']=phone['左边'];let positions=['顶部','中间','底部'],position=await generateAlert(message,positions),key=positions[position][_0xa7b1f3(0x131,'n8D)')]();crop['y']=phone[key];}else{if(widgetSize=='大号'){crop['w']=phone['中号'],crop['h']=phone['大号'],crop['x']=phone['左边'];let positions=['顶部','底部'],position=await generateAlert(message,positions);crop['y']=position?phone['中间']:phone['顶部'];}}}let imgCrop=cropImage(img,new Rect(crop['x'],crop['y'],crop['w'],crop['h']));message=_0x38ac6b(0xf0);const resultOptions=['好的'];await generateAlert(message,resultOptions),files[_0xa7b1f3(0xd4,'VSVI')](path,imgCrop);}}if(colorMode)widget[_0x38ac6b(0x91)]=bgColor;else{if(ImageMode){const bgImgs=await getImageByUrl(Switch_data?hotcommentsData['data'][_0xa7b1f3(0x9e,'g65I')]:hotcommentsData[_0xa7b1f3(0xde,'*wYR')][_0x38ac6b(0xb6)],'hotcomments-bg',![]);bgImg=await blurImage(bgImgs,blurStyle,0x64),widget['backgroundImage']=bgImg;}else widget[_0x38ac6b(0xdb)]=files[_0xa7b1f3(0x9c,'W3qn')](path);}function _0x5cff(_0x45be32,_0x458252){_0x45be32=_0x45be32-0x8b;let _0x4409a1=_0x51b2[_0x45be32];if(_0x5cff['CXFUbM']===undefined){var _0x32ea3b=function(_0x3c3906){const _0x56b48d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x278bb4='';for(let _0x3a2820=0x0,_0x92469f,_0x25d5b4,_0x1d2e86=0x0;_0x25d5b4=_0x3c3906['charAt'](_0x1d2e86++);~_0x25d5b4&&(_0x92469f=_0x3a2820%0x4?_0x92469f*0x40+_0x25d5b4:_0x25d5b4,_0x3a2820++%0x4)?_0x278bb4+=String['fromCharCode'](0xff&_0x92469f>>(-0x2*_0x3a2820&0x6)):0x0){_0x25d5b4=_0x56b48d['indexOf'](_0x25d5b4);}return _0x278bb4;};const _0x5cff1f=function(_0x818f66,_0x1fc3f3){let _0x133ad0=[],_0x4c4b35=0x0,_0x3d58f3,_0x53d165='',_0x151097='';_0x818f66=_0x32ea3b(_0x818f66);for(let _0x2ea102=0x0,_0x11b2af=_0x818f66['length'];_0x2ea102<_0x11b2af;_0x2ea102++){_0x151097+='%'+('00'+_0x818f66['charCodeAt'](_0x2ea102)['toString'](0x10))['slice'](-0x2);}_0x818f66=decodeURIComponent(_0x151097);let _0x4d625f;for(_0x4d625f=0x0;_0x4d625f<0x100;_0x4d625f++){_0x133ad0[_0x4d625f]=_0x4d625f;}for(_0x4d625f=0x0;_0x4d625f<0x100;_0x4d625f++){_0x4c4b35=(_0x4c4b35+_0x133ad0[_0x4d625f]+_0x1fc3f3['charCodeAt'](_0x4d625f%_0x1fc3f3['length']))%0x100,_0x3d58f3=_0x133ad0[_0x4d625f],_0x133ad0[_0x4d625f]=_0x133ad0[_0x4c4b35],_0x133ad0[_0x4c4b35]=_0x3d58f3;}_0x4d625f=0x0,_0x4c4b35=0x0;for(let _0x3d96cb=0x0;_0x3d96cb<_0x818f66['length'];_0x3d96cb++){_0x4d625f=(_0x4d625f+0x1)%0x100,_0x4c4b35=(_0x4c4b35+_0x133ad0[_0x4d625f])%0x100,_0x3d58f3=_0x133ad0[_0x4d625f],_0x133ad0[_0x4d625f]=_0x133ad0[_0x4c4b35],_0x133ad0[_0x4c4b35]=_0x3d58f3,_0x53d165+=String['fromCharCode'](_0x818f66['charCodeAt'](_0x3d96cb)^_0x133ad0[(_0x133ad0[_0x4d625f]+_0x133ad0[_0x4c4b35])%0x100]);}return _0x53d165;};_0x5cff['lmGCyG']=_0x5cff1f,_0x5cff['yzrRjU']={},_0x5cff['CXFUbM']=!![];}const _0x440dae=_0x51b2[0x0],_0x5c6417=_0x45be32+_0x440dae,_0x51b29f=_0x5cff['yzrRjU'][_0x5c6417];if(_0x51b29f===undefined){if(_0x5cff['xyipvC']===undefined){const _0x2c960c=function(_0x271adc){this['FhdrTv']=_0x271adc,this['XHNAZQ']=[0x1,0x0,0x0],this['dlnGRK']=function(){return'newState';},this['ifLoqq']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['wqffwF']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x2c960c['prototype']['TvJmHg']=function(){const _0x3ed470=new RegExp(this['ifLoqq']+this['wqffwF']),_0x23c669=_0x3ed470['test'](this['dlnGRK']['toString']())?--this['XHNAZQ'][0x1]:--this['XHNAZQ'][0x0];return this['HpmFEY'](_0x23c669);},_0x2c960c['prototype']['HpmFEY']=function(_0x566bb1){if(!Boolean(~_0x566bb1))return _0x566bb1;return this['mlDchC'](this['FhdrTv']);},_0x2c960c['prototype']['mlDchC']=function(_0x122e8e){for(let _0x39b206=0x0,_0x4034d2=this['XHNAZQ']['length'];_0x39b206<_0x4034d2;_0x39b206++){this['XHNAZQ']['push'](Math['round'](Math['random']())),_0x4034d2=this['XHNAZQ']['length'];}return _0x122e8e(this['XHNAZQ'][0x0]);},new _0x2c960c(_0x5cff)['TvJmHg'](),_0x5cff['xyipvC']=!![];}_0x4409a1=_0x5cff['lmGCyG'](_0x4409a1,_0x458252),_0x5cff['yzrRjU'][_0x5c6417]=_0x4409a1;}else _0x4409a1=_0x51b29f;return _0x4409a1;}widget['setPadding'](padding[_0x38ac6b(0xca)],padding['left'],padding[_0x38ac6b(0xbf)],padding[_0x38ac6b(0x134)]),Script[_0xa7b1f3(0x11d,'3w*4')](widget),Script[_0x38ac6b(0x124)]();if(previewSize==_0xa7b1f3(0x92,'SKGC'))widget[_0x38ac6b(0x97)]();else previewSize=='medium'?widget[_0x38ac6b(0x125)]():widget[_0xa7b1f3(0x103,'XRFq')]();function _0x3c39(_0x45be32,_0x458252){_0x45be32=_0x45be32-0x8b;let _0x4409a1=_0x51b2[_0x45be32];if(_0x3c39['Gyfjep']===undefined){var _0x32ea3b=function(_0x5cff1f){const _0x3c3906='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x56b48d='';for(let _0x278bb4=0x0,_0x3a2820,_0x92469f,_0x25d5b4=0x0;_0x92469f=_0x5cff1f['charAt'](_0x25d5b4++);~_0x92469f&&(_0x3a2820=_0x278bb4%0x4?_0x3a2820*0x40+_0x92469f:_0x92469f,_0x278bb4++%0x4)?_0x56b48d+=String['fromCharCode'](0xff&_0x3a2820>>(-0x2*_0x278bb4&0x6)):0x0){_0x92469f=_0x3c3906['indexOf'](_0x92469f);}return _0x56b48d;};_0x3c39['DCyWRa']=function(_0x1d2e86){const _0x818f66=_0x32ea3b(_0x1d2e86);let _0x1fc3f3=[];for(let _0x133ad0=0x0,_0x4c4b35=_0x818f66['length'];_0x133ad0<_0x4c4b35;_0x133ad0++){_0x1fc3f3+='%'+('00'+_0x818f66['charCodeAt'](_0x133ad0)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1fc3f3);},_0x3c39['OoIMTj']={},_0x3c39['Gyfjep']=!![];}const _0x440dae=_0x51b2[0x0],_0x5c6417=_0x45be32+_0x440dae,_0x51b29f=_0x3c39['OoIMTj'][_0x5c6417];if(_0x51b29f===undefined){const _0x3d58f3=function(_0x53d165){this['YdKuZX']=_0x53d165,this['FKKFZL']=[0x1,0x0,0x0],this['WcbKLy']=function(){return'newState';},this['ENhAlU']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['CCKkIg']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3d58f3['prototype']['twoxWS']=function(){const _0x151097=new RegExp(this['ENhAlU']+this['CCKkIg']),_0x4d625f=_0x151097['test'](this['WcbKLy']['toString']())?--this['FKKFZL'][0x1]:--this['FKKFZL'][0x0];return this['prpznX'](_0x4d625f);},_0x3d58f3['prototype']['prpznX']=function(_0x2ea102){if(!Boolean(~_0x2ea102))return _0x2ea102;return this['pmYiMm'](this['YdKuZX']);},_0x3d58f3['prototype']['pmYiMm']=function(_0x11b2af){for(let _0x3d96cb=0x0,_0x2c960c=this['FKKFZL']['length'];_0x3d96cb<_0x2c960c;_0x3d96cb++){this['FKKFZL']['push'](Math['round'](Math['random']())),_0x2c960c=this['FKKFZL']['length'];}return _0x11b2af(this['FKKFZL'][0x0]);},new _0x3d58f3(_0x3c39)['twoxWS'](),_0x4409a1=_0x3c39['DCyWRa'](_0x4409a1),_0x3c39['OoIMTj'][_0x5c6417]=_0x4409a1;}else _0x4409a1=_0x51b29f;return _0x4409a1;}async function createWidget(){const _0x58bb30=_0x38ac6b,_0x2390b4=_0xa7b1f3;let _0x56b48d=new ListWidget(),_0x278bb4=_0x56b48d[_0x2390b4(0x117,'bd(z')]('❝\x20');_0x278bb4[_0x2390b4(0x136,'*p*8')]=new Color(_0x2390b4(0xd2,'jI&H')),_0x56b48d['addSpacer']();let _0x3a2820=_0x56b48d['addText'](hotcommentsData[_0x58bb30(0xad)][_0x58bb30(0xb2)]);_0x3a2820[_0x58bb30(0xd9)]=Font[_0x2390b4(0x140,'sn7V')](0x12),_0x3a2820[_0x2390b4(0x9d,'g65I')]=new Color(_0x2390b4(0x12f,'W3qn')),_0x3a2820[_0x58bb30(0x132)](),_0x3a2820[_0x58bb30(0xc4)]=Switch_data?_0x2390b4(0xfc,'2X^g')+hotcommentsData['data'][_0x58bb30(0xc4)][_0x58bb30(0xc9)]('?')[0x1][_0x2390b4(0x12d,'Ccit')]('=')[0x1][_0x2390b4(0xe3,'zEdg')]('.')[0x0]:_0x2390b4(0x127,'g65I')+hotcommentsData[_0x58bb30(0xad)]['songId'],_0x3a2820[_0x58bb30(0x99)]=0.5,_0x56b48d[_0x58bb30(0xb0)]();const _0x92469f=_0x56b48d['addStack']();_0x92469f[_0x2390b4(0x13e,'PVCs')]();const _0x25d5b4=_0x92469f[_0x58bb30(0xd8)]();_0x25d5b4[_0x2390b4(0x128,'v&rh')]();const _0x1d2e86=await getImage(Switch_data?hotcommentsData['data'][_0x58bb30(0xe9)]:hotcommentsData[_0x58bb30(0xad)][_0x58bb30(0xd5)]);let _0x818f66=_0x25d5b4[_0x58bb30(0xfd)](_0x1d2e86);_0x818f66[_0x2390b4(0x101,'hB[M')]=new Size(0x1e,0x1e),_0x818f66['cornerRadius']=0xf,_0x818f66[_0x58bb30(0xc3)]=0x4,_0x818f66[_0x2390b4(0xe0,'9wAw')]=new Color(_0x58bb30(0x121)),_0x25d5b4[_0x58bb30(0xb0)](0xa);const _0x1fc3f3=_0x25d5b4['addStack']();_0x1fc3f3['layoutVertically']();const _0x133ad0=_0x1fc3f3[_0x58bb30(0xc6)](hotcommentsData[_0x2390b4(0x102,'Q7(G')]['nickname']);_0x133ad0[_0x58bb30(0x116)]=Color[_0x2390b4(0xbe,'xo2G')](),_0x133ad0[_0x58bb30(0xd9)]=Font[_0x58bb30(0xd1)](0xc),_0x133ad0['url']=_0x58bb30(0xb7),_0x1fc3f3[_0x2390b4(0x10f,'F&s7')](0x5);const _0x4c4b35=_0x1fc3f3['addText'](Switch_data?_0x58bb30(0xb5)+hotcommentsData[_0x58bb30(0xad)]['artistsname']+_0x58bb30(0x115)+hotcommentsData['data']['name']+'》':_0x2390b4(0x135,'5k5b')+hotcommentsData[_0x2390b4(0xe5,'3j(G')]['songAutho']+'\x20·《'+hotcommentsData[_0x2390b4(0x13c,'zEdg')]['songName']+'》');_0x4c4b35[_0x58bb30(0x116)]=new Color(_0x58bb30(0x121)),_0x4c4b35['font']=Font['semiboldSystemFont'](0x9),_0x92469f[_0x2390b4(0xd6,'!!n&')]();let _0x3d58f3=SFSymbol[_0x2390b4(0x120,'$N2v')](_0x2390b4(0xef,'3w*4')),_0x53d165=_0x92469f[_0x2390b4(0xf7,'82P3')](_0x3d58f3[_0x2390b4(0x138,'j85)')]);return _0x53d165[_0x2390b4(0xcc,'v&rh')]=new Size(0x14,0x14),_0x53d165['tintColor']=Color['white'](),_0x53d165[_0x2390b4(0x8c,'9wAw')]=Switch_data?hotcommentsData['data']['url']:_0x58bb30(0xa8)+hotcommentsData['data'][_0x58bb30(0xce)]+'.mp3',_0x56b48d;}async function getData(_0x151097){const _0x54d440=_0xa7b1f3,_0x4bdbe8=_0x38ac6b,_0x4d625f=files[_0x4bdbe8(0xa2)](files[_0x4bdbe8(0xec)](),_0x4bdbe8(0xf5));var _0x2ea102;let _0x11b2af=_0x4bdbe8(0x105),_0x3d96cb='https://api.uomg.com/api/comments.163';try{_0x2ea102=await new Request(Switch_data?_0x3d96cb:_0x11b2af)[_0x4bdbe8(0x110)](),files['writeString'](_0x4d625f,JSON['stringify'](_0x2ea102)),log(_0x54d440(0x94,'Ku$f')+JSON['stringify'](_0x2ea102));}catch(_0x2c960c){_0x2ea102=JSON[_0x54d440(0xc1,'XRFq')](files['readString'](_0x4d625f)),log('[+]获取热评失败，使用缓存数据');}return _0x2ea102;}async function getImage(_0x271adc){const _0xc4eaa5=_0xa7b1f3,_0x3ed470=new Request(_0x271adc),_0x23c669=await _0x3ed470[_0xc4eaa5(0x12a,'Jl08')]();return _0x23c669;}async function shadowImage(_0x566bb1){const _0x4f92a7=_0xa7b1f3,_0xafb86e=_0x38ac6b;let _0x122e8e=new DrawContext();return _0x122e8e[_0xafb86e(0xf1)]=_0x566bb1[_0xafb86e(0xf1)],_0x122e8e[_0xafb86e(0x113)](_0x566bb1,new Rect(0x0,0x0,_0x566bb1[_0x4f92a7(0x9b,'sn7V')][_0xafb86e(0xab)],_0x566bb1[_0xafb86e(0xf1)][_0x4f92a7(0x123,'3N$R')])),_0x122e8e['setFillColor'](new Color(_0x4f92a7(0xa9,'mB9O'),0.5)),_0x122e8e['fillRect'](new Rect(0x0,0x0,_0x566bb1[_0xafb86e(0xf1)][_0x4f92a7(0x10a,'2X^g')],_0x566bb1[_0xafb86e(0xf1)][_0x4f92a7(0xb1,'3w*4')])),await _0x122e8e['getImage']();}async function generateAlert(_0x39b206,_0x4034d2){const _0x5b3890=_0x38ac6b,_0x1bab59=_0xa7b1f3,_0xc44cd4=function(){let _0x3a1649=!![];return function(_0x1323a1,_0x21e92c){const _0x58017a=_0x3a1649?function(){const _0x2a5ab3=_0x3c39;if(_0x21e92c){const _0xd2ad1c=_0x21e92c[_0x2a5ab3(0x11f)](_0x1323a1,arguments);return _0x21e92c=null,_0xd2ad1c;}}:function(){};return _0x3a1649=![],_0x58017a;};}(),_0x1bd5a5=_0xc44cd4(this,function(){const _0x3bf126=function(){const _0x4dcd6a=_0x5cff,_0x389438=_0x3c39,_0x8d2739=_0x3bf126['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x389438(0x118)](_0x389438(0xd3));return!_0x8d2739[_0x4dcd6a(0xcb,'Lu7M')](_0x1bd5a5);};return _0x3bf126();});_0x1bd5a5();let _0x7773ba=new Alert();_0x7773ba[_0x1bab59(0x90,'1pPS')]=_0x39b206;for(const _0x457181 of _0x4034d2){_0x7773ba[_0x1bab59(0x98,'3w*4')](_0x457181);}let _0xf05c3a=await _0x7773ba[_0x5b3890(0x122)]();return _0xf05c3a;}function cropImage(_0x4b4a22,_0x28067e){const _0x5829dc=_0x38ac6b,_0x5b6f4d=_0xa7b1f3;let _0x1c66de=new DrawContext();return _0x1c66de[_0x5b6f4d(0xe8,'YLNE')]=new Size(_0x28067e['width'],_0x28067e[_0x5829dc(0x12b)]),_0x1c66de['drawImageAtPoint'](_0x4b4a22,new Point(-_0x28067e['x'],-_0x28067e['y'])),_0x1c66de[_0x5829dc(0x12c)]();}async function blurImage(_0x5328db,_0x22c6c5,_0x12c4d0=0x64){const _0x59ed50=_0xa7b1f3,_0x4d2424=_0x38ac6b,_0x3290ca=_0x4d2424(0x8d)+_0x22c6c5+_0x4d2424(0x10e)+_0x12c4d0+');\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Perform\x20the\x20additional\x20processing\x20for\x20dark\x20images.\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(isDark)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Draw\x20the\x20hard\x20light\x20box\x20over\x20it.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20context.globalCompositeOperation\x20=\x20\x22hard-light\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20context.fillStyle\x20=\x20\x22rgba(55,55,55,0.2)\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20context.fillRect(0,\x200,\x20w,\x20h);\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Draw\x20the\x20soft\x20light\x20box\x20over\x20it.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20context.globalCompositeOperation\x20=\x20\x22soft-light\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20context.fillStyle\x20=\x20\x22rgba(55,55,55,1)\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20context.fillRect(0,\x200,\x20w,\x20h);\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Draw\x20the\x20regular\x20box\x20over\x20it.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20context.globalCompositeOperation\x20=\x20\x22source-over\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20context.fillStyle\x20=\x20\x22rgba(55,55,55,0.4)\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20context.fillRect(0,\x200,\x20w,\x20h);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Otherwise\x20process\x20light\x20images.\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20context.fillStyle\x20=\x20\x22rgba(255,255,255,0.4)\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20context.fillRect(0,\x200,\x20w,\x20h);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20a\x20base64\x20representation.\x0a\x20\x20\x20\x20\x20\x20\x20\x20canvas.toDataURL();\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20';let _0x5849ed=Data[_0x4d2424(0xb8)](_0x5328db)[_0x4d2424(0x114)](),_0x37cdfa='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22blurImg\x22\x20src=\x22data:image/png;base64,'+_0x5849ed+_0x4d2424(0x104),_0x32a0ea=new WebView();await _0x32a0ea[_0x4d2424(0x11a)](_0x37cdfa);let _0x114898=await _0x32a0ea[_0x4d2424(0x9a)](_0x3290ca),_0x42c623=_0x114898[_0x59ed50(0xdc,'82P3')](0x16),_0x253ffb=Data[_0x4d2424(0x129)](_0x42c623),_0x592083=Image['fromData'](_0x253ffb);return _0x592083;}async function getImageByUrl(_0x185d21,_0x54cdab,_0x17eae8=!![]){const _0x45f2a3=_0xa7b1f3,_0x220c24=_0x38ac6b,_0x157ca5=FileManager['local']()[_0x220c24(0xa2)](FileManager[_0x220c24(0xe4)]()[_0x45f2a3(0xd7,'^^N$')](),_0x54cdab),_0x3631ca=FileManager[_0x45f2a3(0x12e,'^xlI')]()['fileExists'](_0x157ca5);if(_0x17eae8&&_0x3631ca)return Image[_0x220c24(0xae)](_0x157ca5);try{const _0x2eba0a=new Request(_0x185d21),_0x5b0b3b=await _0x2eba0a[_0x220c24(0xe6)]();return FileManager[_0x45f2a3(0x100,'*p*8')]()[_0x45f2a3(0xba,'*wYR')](_0x157ca5,_0x5b0b3b),_0x5b0b3b;}catch(_0x53a6c5){console[_0x45f2a3(0xcd,'mB9O')](_0x220c24(0x13b)+_0x53a6c5);if(_0x3631ca)return Image[_0x220c24(0xae)](_0x157ca5);let _0x3c1dae=new DrawContext();return _0x3c1dae[_0x45f2a3(0x107,'Q7(G')]=new Size(0x64,0x64),_0x3c1dae[_0x45f2a3(0x11c,'Rbj%')](Color[_0x220c24(0xeb)]()),_0x3c1dae[_0x45f2a3(0xff,'Ccit')](new Rect(0x0,0x0,0x64,0x64)),await _0x3c1dae[_0x220c24(0x12c)]();}}function phoneSizes(){let _0x9f3053={'2340':{'小号':0x1b4,'中号':0x3a8,'大号':0x3d4,'左边':0x48,'右边':0x23a,'顶部':0xd4,'中间':0x2f4,'底部':0x514},'2532':{'小号':0x1d8,'中号':0x3f4,'大号':0x422,'左边':0x4e,'右边':0x26a,'顶部':0xe6,'中间':0x332,'底部':0x580},'2778':{'小号':0x206,'中号':0x45a,'大号':0x48a,'左边':0x56,'右边':0x2a6,'顶部':0xfc,'中间':0x382,'底部':0x608},'2688':{'小号':0x1fb,'中号':0x438,'大号':0x471,'左边':0x51,'右边':0x28e,'顶部':0xe4,'中间':0x35a,'底部':0x5d0},'1792':{'小号':0x152,'中号':0x2d0,'大号':0x2f6,'左边':0x36,'右边':0x1b4,'顶部':0xa0,'中间':0x244,'底部':0x3e8},'2436':{'小号':0x1d1,'中号':0x3db,'大号':0x40b,'左边':0x45,'右边':0x24f,'顶部':0xd5,'中间':0x30f,'底部':0x549},'2208':{'小号':0x1d7,'中号':0x414,'大号':0x42f,'左边':0x63,'右边':0x2a0,'顶部':0x72,'中间':0x2b8,'底部':0x4fe},'1334':{'小号':0x128,'中号':0x282,'大号':0x288,'左边':0x36,'右边':0x190,'顶部':0x3c,'中间':0x19c,'底部':0x2fc},'1136':{'小号':0x11a,'中号':0x248,'大号':0x26e,'左边':0x1e,'右边':0x14c,'顶部':0x3b,'中间':0x18f,'底部':0x18f}};return _0x9f3053;}async function getversion(){const _0x372231=_0xa7b1f3,_0x41edc9=_0x38ac6b,_0x222977=files['joinPath'](files[_0x41edc9(0xec)](),_0x372231(0xc5,'^xlI'));var _0x3dc5c7;try{_0x3dc5c7=await new Request('https://cdn.jsdelivr.net/gh/Nicolasking007/CDN@latest/Scriptable/UPDATE.json')[_0x41edc9(0x110)](),files[_0x372231(0x119,'sn7V')](_0x222977,JSON['stringify'](_0x3dc5c7)),console[_0x372231(0x8b,'Q7(G')]('===>欢迎使用：'+_0x3dc5c7[_0x372231(0xf4,'R3vf')]+_0x372231(0x133,'n8D)')),console['log'](_0x41edc9(0x13a)),log(_0x41edc9(0x11b));}catch(_0x158b2a){_0x3dc5c7=JSON['parse'](files[_0x372231(0xfa,'DB6p')](_0x222977)),log(_0x372231(0xe7,'n8D)'));}return _0x3dc5c7;}async function updateCheck(_0x55f4a3){const _0x458f78=_0xa7b1f3,_0x425b5f=_0x38ac6b,_0x4e11d7=versionData;log(_0x425b5f(0xf9)+_0x4e11d7[_0x425b5f(0xed)][_0x425b5f(0x10d)]);let _0x2ac64e=![];if(_0x4e11d7['ONE-hotcomments']['version']!=_0x55f4a3){_0x2ac64e=!![],log(_0x425b5f(0x108));if(!config[_0x458f78(0xaa,'F&s7')]){log(_0x425b5f(0xc8));let _0x3b1721=new Alert();_0x3b1721[_0x458f78(0xea,'vYs2')]='检测到有新版本！',_0x3b1721['addDestructiveAction']('暂不更新'),_0x3b1721[_0x458f78(0x93,'DB6p')](_0x425b5f(0xbc)),_0x3b1721['add'],_0x3b1721[_0x458f78(0xfb,'jI&H')]=_0x4e11d7['ONE-hotcomments'][_0x425b5f(0x8f)];if(await _0x3b1721[_0x425b5f(0x139)]()==0x1){const _0x4a91c2=new Request(_0x4e11d7[_0x458f78(0xaf,'*wYR')]['cdn_scriptURL']),_0x1d0394=await _0x4a91c2['loadString']();files[_0x458f78(0xb4,'XRFq')](module[_0x425b5f(0xd0)],_0x1d0394);const _0x4e99b1=new Notification();_0x4e99b1['title']='下载更新成功',_0x4e99b1['body']=_0x458f78(0xa7,'^xlI'),_0x4e99b1[_0x458f78(0x137,'PVCs')]();}Script[_0x458f78(0xc0,'f6C#')]();}}else log(_0x458f78(0x10c,'3N$R'));return _0x2ac64e;};