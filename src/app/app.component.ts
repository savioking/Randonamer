import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  // Variables

  translationList: {str:string}[] = [
    {str:"Isso mesmo que você ouviu"},
    {str:"That's exactly what you heard"},
    {str:"Es exactamente lo que escuchaste"},
    {str:"Genau das haben Sie gehört"},
    {str:"まさにあなた聞いたことです"},
    {str:"Это именно то, что вы слышали"},
    {str:"C'est exactement ce que tu as écouté"},
    {str:"E' quello che hai ascoltato"},
    {str:"Dit is presies wat jy gehoor het"},
    {str:"Αυτό ακριβώς άκουσες"},
    {str:"Dat is precies wat je hoorde"},
    {str:"Quod suus 'prorsus quod audistis"},
    {str:"Det er præcis, hvad du har hørt"},
    {str:"Tam olarak bunu duydun"},
    {str:"这正是你所听到的"},
    {str:"Itulah yang Anda dengar"},
    {str:"Itu betul-betul apa yang awak dengar"},
    {str:"당신이 들은 게 바로 그거예요"},
    {str:"Sin dìreach a chuala tu"}
  ]

  
  currentTitlePos = 3
  usedTitlePos = [this.currentTitlePos]

  titleString = this.translationList[this.currentTitlePos].str;
  
  title = 'randonamer';

  fontSizeStyle = ''

  delay = 1000;
  repeat = 0;
  timeStart!: Date;
  
  // Interfaces & Implements

  ngOnInit(): void {
    this.timeStart = new Date()
    setTimeout(()=>{
      this.fontSizeStyle = 'transform:scale(1.75)';
    },100)
    setTimeout(() => this.delayed() ,this.delay)
    // Do nothing
    return
  }

  

  changeTitle() {
    let randomPos = this.currentTitlePos
    do {
      randomPos = Math.floor(Math.random()*this.translationList.length)

      // if (this.usedTitlePos.includes(randomPos)) console.log('rejected',randomPos)

    } while (this.usedTitlePos.includes(randomPos))

    this.titleString = this.translationList[randomPos].str

    this.currentTitlePos = randomPos

    if(this.usedTitlePos.length >= this.translationList.length-1) {
      this.usedTitlePos = []
    }
    
    this.usedTitlePos.push(randomPos)
  }

  delayed() {
    console.log(this.delay)
    this.changeTitle()
    this.repeat++
    if (this.delay > 500) {
      this.delay -= 70 
    } else if (this.delay > 100 ) {
      this.delay -= 10
    } else {
      this.delay -= 1
    }

    if (this.delay>70) {
      setTimeout(() => this.delayed(),this.delay)
    } else {
      let now = new Date();
      let timelapse = new Date(now.getTime() - this.timeStart.getTime())
      console.log(timelapse.getSeconds())
    }
    
  }

}
