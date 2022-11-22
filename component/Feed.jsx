import React from 'react'
import './Feed.css';
function Feed() {
  return (
    <>
      <div className='header'>
      <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" className='insta_img' />
      <img src="https://lh3.googleusercontent.com/qbbuPbH3WDwx1kxkyk0rX7S3f0d8OIAiJA4LMBpMO70-bqq1JgF4SBgtSIrFIKN46Zdfz-3PJjoXbMEfENOyMhL2CvVaPgJNJ2oja3L8HtLhp-Qi_SUetiw2I2dLhuWduDtoITGNgepu1ipMW1joOk6K0qurhIjobwkCRLcPCG4gSu4D8shmZ8S5dgkLMicXec9GxeON3_Fn0J8sTKiTTn7BVwKwopUwuUbsuRv7WS4YAaFfMXeuntNAXAHiM9rAuZkkkHV3M7OpKCqId0XVUwqnLHXXYwJU1rxmYGLm3_DSk7dc9yIXAg6FDRH6MyMDjn5Ns4msLLvQ5XMIzLbjcKgY61GakhaNVkPluJnyWYYTecioncMV2g0NvW_QWx8L_cdV7Es9M1_5IGLyI3Gp9Y8c1h_kW4G0LRlhEGJ9IYhAoA-fy5c9Q2gL_B-yy4thm9z86GgmXxch_j93ykIQPX2m_FA3t2KrNuUqNLlcULmPsc0pVJd85IXsBCIOudL3fSURc4ni2i5H7Qz1RsChxymViWU6h53RUTCnkNs5JDCeAR-a0StJJ_f-2NJA4jAKjGX_zOs_5f1Su7wvgjsfHou1sIRjm4Kl3-iCZYAE-so-7HgDbvbCV2xXh5KprkLd9-6vg76EHl6lygLtGrOlO5xG5c4Co3pC_3tC9NrozQX0LvM_-r0h74p-53G-1tlo7F2SH3EDdlRaHABXkknyI7l1zQdyXZixJ1OTLspyTaaJvvtZcI8ODrEXPi8G23zoMbedilW0WhcPCSIweJNarNeWcDHPNzkjjkbVj_0apKDbG_99R1ddcjLIbxyFes1LVjf1rNL1p-eMhU5y3Bs66yP6iWZkn2-ffGxdS4xUvlplXpdGIWifZg_DeErtH95Z9SxzCc-cQx5QdWgRHtVBLLPwpAOpbaDXH2L4K4sLCQIQH8p2=w476-h592-no?authuser=0"
       alt="" className='profile_img'/>
      </div>
      
      <div className='main_container'>
          <div className='upload_container'>
            <span className="movie_icon material-symbols-outlined">movie</span>
              {/* <i class="fa-solid fa-clapperboard"></i> */}
            <div className='upload_text'>UPLOAD</div>
          </div>
        <div className='reels_container'>Reels</div>
      </div>
    </>
  )
}

export default Feed;
