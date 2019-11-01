<template>
	<div id="index">
    <div class="inner" id="home-section">
	<div id="home-top" class="home-content">
		<div class="bg-cover">
		<div class="container">
		    <div class="ad-content">
		      <h1>未経験からプログラマーへ</h1>
		      <p>勉強を続けるコツは「仕組み」を作ること。脳科学が教える｢効率的に学習する方法｣6つのポイント </p>
		      <p><a href="#" class="btn">会員登録</a></p>
		    </div>

		    <div class="signup-box userbox">
		      <form action="" method="post" class="form-box">
		        <h3>Sign Up</h3>
		        <div class="form-group">
		          <input v-model="email" type="text" class="form-control" placeholder="Email Addresss"/>
		        </div>
		        <div class="form-group">
		          <input v-model="username" type="text" class="form-control" placeholder="Username"/>
		        </div>
		        <div class="form-group">
		          <input v-model="password" type="password" class="form-control" placeholder="Password"/>
		        </div>
		        <div class="form-group">
		          <input type="submit" class="btn btn-primary btn-pill" value="Sign up" @click="onRegister"/>
		        </div>
		      </form>
			</div>
		</div> <!-- container -->
		</div><!-- bg-cover -->
	</div> <!-- home-top -->
	
	<div id="home-course" class="home-content">
		<div class="bg-cover">
		<div class="container">
			<h2 class="section-title">COURSE</h2>
			<div class="course-list">
				<article class="course-item">
					<figure class="course-image">
					<a href="#"><img src="../../assets/cous-fig01.jpg" alt="Image" class="img-fluid"></a>
					</figure>
					<div class="course-inner">
					<span class="course-price">¥20,000</span>
					<div class="course-period">4 Lessons / 12 week</div>
					<h3><a href="#">プログラマー入門コース</a></h3>
					<p>Webサイト制作において必須で、最も基本のスキルが身につく。</p>
					</div>
					<div class="course-data">
					<div class="course-stds">2,193 students</div>
					<div class="course-cmt">2</div>
					</div>
				</article>

				<article class="course-item">
					<figure class="course-image">
					<a href="#"><img src="../../assets/cous-fig02.jpg" alt="Image" class="img-fluid"></a>
					</figure>
					<div class="course-inner">
					<span class="course-price">¥43,000</span>
					<div class="course-period">4 Lessons / 12 week</div>
					<h3><a href="#">ITエンジニア入門コース</a></h3>
					<p>当講座では、基礎から実践的な運用まで、現場で欠かせない技術を体系的に学習します。</p>
					</div>
					<div class="course-data">
					<div class="course-stds">4,206 students</div>
					<div class="course-cmt">7</div>
					</div>
				</article>

				<article class="course-item">
					<figure class="course-image">
					<a href="#"><img src="../../assets/cous-fig03.jpg" alt="Image" class="img-fluid"></a>
					</figure>
					<div class="course-inner">
					<span class="course-price">¥23,000</span>
					<div class="course-period">4 Lessons / 12 week</div>
					<h3><a href="#">ITエンジニア入門コース</a></h3>
					<p>Webデザイナーコースの内容に加え、Webクリエイター能力認定試験の資格対策がついたコースです。</p>
					</div>
					<div class="course-data">
					<div class="course-stds">4,206 students</div>
					<div class="course-cmt">7</div>
					</div>
				</article>
			</div>
		</div>
		</div>
	</div>

	<div id="home-merit" class="home-content">
		<div class="container">
            <h2 class="section-title">Programs</h2>
            <p class="ttl-cap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
        	<article class="merit-item">
	          	<div class="merit-img">
	            <img src="../../assets/merit01.png" alt="png" class="img-fluid">
	          	</div>
	          	<div class="merit-text">
	          	<div class="text-inner">
	            <h2 class="text-ttl">Learn from WEB</h2>
	            <p class="text-cont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
				<ul class="text-data">
					<li><span class="icon"><i class="iconfont icon-renzheng"></i></span>W3Cメンバーだからこそ最新で正確なスキル</li>
					<li><span class="icon"><i class="iconfont icon-kecheng"></i></span>1,000以上のオンラインコース</li>
				</ul>
				</div>
	            </div>
            </article>
        	<article class="merit-item">
	          	<div class="merit-img">
	            <img src="../../assets/merit02.png" alt="png" class="img-fluid">
	          	</div>
	          	<div class="merit-text">
	          	<div class="text-inner">
	            <h2 class="text-ttl">Learn with PLAN</h2>
	            <p class="text-cont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
				<ul class="text-data">
					<li><span class="icon"><i class="iconfont icon-dengpao"></i></span>科学的に証明された学習法</li>
					<li><span class="icon"><i class="iconfont icon-plan"></i></span>勉強を続けるための習慣力を高める3つのコツ</li>
				</ul>
			    </div>
	            </div>
            </article>
        	<article class="merit-item">
	          	<div class="merit-img">
	            <img src="../../assets/merit03.png" alt="png" class="img-fluid">
	          	</div>
	          	<div class="merit-text">
	          	<div class="text-inner">
	            <h2 class="text-ttl">Learn for GOAL</h2>
	            <p class="text-cont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
				<ul class="text-data">
					<li><span class="icon"><i class="iconfont icon-gongzuo"></i></span>10大キャリアサポート</li>
					<li><span class="icon"><i class="iconfont icon-biye"></i></span>25,000人を超える卒業生</li>
				</ul>
				</div>
	            </div>
            </article>
		</div>

	</div>

	<div id="home-contact" class="home-content">
		<div class="container">
			<h2 class="section-title">CONTACT</h2>
            <p class="ttl-cap">Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
          
            <form method="post">
              <div class="form-group row">
                <div>
                  <input type="text" class="form-control" placeholder="name">
                </div>
                <div>
                  <input type="text" class="form-control" placeholder="age">
                </div>
              </div>

              <div class="form-group row">
                <div>
                  <input type="text" class="form-control" placeholder="Subject">
                </div>
              </div>

              <div class="form-group row">
                <div>
                  <input type="email" class="form-control" placeholder="Email">
                </div>
              </div>
              <div class="form-group row">
                <div>
                  <textarea class="form-control" id="" cols="30" rows="5" placeholder="Write your message here."></textarea>
                </div>
              </div>

              <div class="form-group row">
                <div> 
                  <input type="submit" class="btn btn-primary btn-block btn-pill" value="Send Message">
                </div>
              </div>

            </form>
		</div>
	</div>

	

    </div> <!-- inner -->
	</div> <!-- index -->
</template>

<script src="./index.js"></script>
<style type="text/css" src="./index.css" scoped></style>