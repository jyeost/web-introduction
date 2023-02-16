// 영화
    movies = [
        { title : "귀멸의 칼날 무한열차",
         content : "혈귀로 변한 여동생 ‘네즈코’를 되돌리기 위해 귀살대가 된 ‘탄지로’! 어둠 속을 달리는 무한열차에서 승객들이 흔적 없이 사라진다는 소식에 ‘젠이츠’, ‘이노스케’와 함께 임무 수행을 위해 무한열차에 탑승한다. 그리고 그 곳에서 만난 귀살대 최강 검사 염주 ‘렌고쿠’! 이들은 무한열차에 숨어 있는 혈귀의 존재를 직감하고 모두를 구하기 위해 목숨을 건 혈전을 시작하는데… 그 칼로 악몽을 끊어라!",
         img_source : "https://movie-phinf.pstatic.net/20220331_264/1648693399684Fm31b_JPEG/movie_image.jpg",
         url : "https://movie.naver.com/movie/bi/mi/basic.naver?code=196051#"
        },
        { title : "해리 포터와 마법사의 돌",
         content : "해리 포터(다니엘 래드클리프 분)는 위압적인 버논 숙부(리챠드 그리피스 분)와 냉담한 이모 페투니아 (피오나 쇼 분), 욕심 많고 버릇없는 사촌 더즐리(해리 멜링 분) 밑에서 갖은 구박을 견디며 계단 밑 벽장에서 생활한다. 이모네 식구들 역시 해리와의 동거가 불편하기는 마찬가지. 이모 페투니아에겐 해리가 이상한(?) 언니 부부에 관한 기억을 떠올리게 만드는 달갑지 않은 존재다.  11살 생일이 며칠 앞으로 다가왔지만 한번도 생일파티를 치르거나 제대로 된 생일선물을 받아 본 적이 없는 해리로서는 특별히 신날 것도 기대 할 것도 없다. 11살 생일을 며칠 앞둔 어느 날 해리에게 초록색  잉크로 쓰여진 한 통의 편지가 배달된다. 그 편지의 내용은 다름 아닌 해리의 11살 생일을 맞이하여 전설적인“호그와트 마법학교”에서 보낸 입학초대장이었다. 그리고 해리의 생일을 축하하러 온...",
         img_source : "https://movie-phinf.pstatic.net/20181019_236/1539926790655oHv5z_JPEG/movie_image.jpg",
         url : "https://movie.naver.com/movie/bi/mi/basic.naver?code=30688"
        },
        { title : "써니",
         content : "가장 찬란한 순간, 우리는 하나였다. 전라도 벌교 전학생 나미는 긴장하면 터져 나오는 사투리 탓에 첫날부터 날라리들의 놀림감이 된다. 이때 범상치 않는 포스의 친구들이 어리버리한 그녀를 도와주는데… 그들은 진덕여고 의리짱 춘화, 쌍꺼풀에 목숨 건 못난이 장미, 욕배틀 대표주자 진희, 괴력의 다구발 문학소녀 금옥, 미스코리아를 꿈꾸는 사차원 복희 그리고 도도한 얼음공주 수지. 나미는 이들의 새 멤버가 되어 경쟁그룹 ‘소녀시대’와의 맞짱대결에서  할머니로부터 전수받은 사투리 욕 신공으로 위기상황을 모면하는 대활약을 펼친다.",
         img_source : "https://movie-phinf.pstatic.net/20111223_71/1324635483880NQEfk_JPEG/movie_image.jpg",
         url : "https://movie.naver.com/movie/bi/mi/basic.naver?code=76016"
        },
        { title : "더 퍼스트 슬램덩크",
         content : "전국 제패를 꿈꾸는 북산고 농구부 5인방의 꿈과 열정, 멈추지 않는 도전을 그린 영화 <br> 송태섭 너무 잘생김",
         img_source : "https://movie-phinf.pstatic.net/20221216_283/1671153488789d3g4j_JPEG/movie_image.jpg",
         url : "https://movie.naver.com/movie/bi/mi/basic.naver?code=223800"
        },
        { title : "세 얼간이",
         content : "‘알 이즈 웰’을 외치던 유쾌한 세 남자가 돌아왔다! 천재들만 간다는 일류 명문대 ICE, 성적과 취업만을 강요하는 학교를 발칵 뒤집어 놓은 대단한 녀석 란초! 아버지가 정해준 꿈, `공학자`가 되기 위해 정작 본인이 좋아하는 일은 포기하고 공부만하는 파파보이 파르한! 찢어지게 가난한 집, 병든 아버지와 식구들을 책임지기 위해 무조건 대기업에 취직해야만 하는 라주! 친구의 이름으로 뭉친 `세 얼간이`! 삐딱한 천재들의 진정한 꿈을 찾기 위한 세상 뒤집기 한판이 시작된다!",
         img_source : "https://movie-phinf.pstatic.net/20161005_215/1475647328961ETC6k_JPEG/movie_image.jpg",
         url : "https://movie-phinf.pstatic.net/20161005_215/1475647328961ETC6k_JPEG/movie_image.jpg"
        }
    ];



    // 영화 보여주는 html
    let html =``;
    movies.forEach((element, idx) => {

        html += `<div class="box_idx">
        <h2>순위 ${idx+1}</h2>
        <div class="images">
                <img src="${element.img_source}" class="box" onclick="javascript: location.href='${element.url}'"/>
                <div>
                    <h3 class='ml'>${element.title}</h3>
                    <p class='ml' style="margin-top:40px;">${element.content}</p>
                </div>
            </div>
        </div><br>`;
    });
    document.getElementById("container").innerHTML = html;


    html =``;
    movies.forEach((element, idx) => {
        html += `<label><input type=radio name="${idx+1}" value="${idx+1}">${element.title}</label>`;
    });

    document.getElementById("chkbx").innerHTML = html;


    // 방명록 버튼 클릭이벤트
    document.getElementById("showResult").onclick= function(){
        let radio_length = document.querySelectorAll(`input:checked`).length;
        let name = document.getElementById("name").value;
        alert(name+'님, 저와 '+radio_length+'개의 취향이 같으시네요!');
    } // end of 버튼 이벤트
