// Sistema de áudio avançado para o Moeda Jovem
export class AudioManager {
  constructor() {
    this.sounds = {};
    this.backgroundMusic = null;
    this.soundEnabled = true;
    this.musicEnabled = true;
    this.musicVolume = 0.6; // Volume mais alto para música
    this.soundVolume = 0.4; // Volume mais suave para efeitos
    this.musicInterval = null;
    this.currentMelodyIndex = 0;
    
    this.initializeSounds();
  }

  initializeSounds() {
    try {
      // Usando Web Audio API para criar sons sintéticos
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Criar sons sintéticos suaves
      this.createSounds();
    } catch (error) {
      console.warn('Web Audio API não suportada:', error);
    }
  }

  createSounds() {
    // Som de clique suave e agradável
    this.sounds.click = () => this.playTone([800, 1000], 0.08, 'sine', 0.15);
    
    // Som de acerto (acorde harmonioso)
    this.sounds.correct = () => this.playChord([523.25, 659.25, 783.99], 0.4, 'sine', 0.25);
    
    // Som de erro (mais suave e menos agressivo)
    this.sounds.incorrect = () => this.playTone([220, 196], 0.3, 'sine', 0.2);
    
    // Som de conquista (fanfarra suave)
    this.sounds.achievement = () => {
      this.playChord([523.25, 659.25, 783.99], 0.6, 'sine', 0.3);
      setTimeout(() => this.playChord([659.25, 783.99, 987.77], 0.6, 'sine', 0.3), 300);
    };
    
    // Som de confete com efeitos de aplausos sintéticos
    this.sounds.confetti = () => {
      // Efeito de confete estourando
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          this.playTone([Math.random() * 600 + 600], 0.15, 'sine', 0.2);
        }, i * 80);
      }
      
      // Efeito de aplausos sintético
      setTimeout(() => {
        for (let i = 0; i < 15; i++) {
          setTimeout(() => {
            this.playNoise(0.05, 0.1);
          }, i * 50);
        }
      }, 500);
    };
    
    // Som de level up (progressão ascendente)
    this.sounds.levelUp = () => {
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25];
      notes.forEach((note, index) => {
        setTimeout(() => {
          this.playTone([note], 0.3, 'sine', 0.25);
        }, index * 150);
      });
    };
    
    // Som de moeda (toque cristalino)
    this.sounds.coin = () => this.playTone([1000, 1200, 1500], 0.25, 'sine', 0.2);
  }

  playTone(frequencies, duration, waveType = 'sine', volume = 0.3) {
    if (!this.soundEnabled || !this.audioContext) return;

    frequencies.forEach((freq, index) => {
      setTimeout(() => {
        try {
          const oscillator = this.audioContext.createOscillator();
          const gainNode = this.audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(this.audioContext.destination);
          
          oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime);
          oscillator.type = waveType;
          
          const finalVolume = this.soundVolume * volume;
          gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
          gainNode.gain.linearRampToValueAtTime(finalVolume, this.audioContext.currentTime + 0.01);
          gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
          
          oscillator.start(this.audioContext.currentTime);
          oscillator.stop(this.audioContext.currentTime + duration);
        } catch (error) {
          console.warn('Erro ao reproduzir tom:', error);
        }
      }, index * 100);
    });
  }

  playChord(frequencies, duration, waveType = 'sine', volume = 0.3) {
    if (!this.soundEnabled || !this.audioContext) return;

    frequencies.forEach((freq) => {
      try {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime);
        oscillator.type = waveType;
        
        const finalVolume = (this.soundVolume * volume) / frequencies.length; // Dividir volume pelo número de notas
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(finalVolume, this.audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
      } catch (error) {
        console.warn('Erro ao reproduzir acorde:', error);
      }
    });
  }

  playNoise(duration, volume = 0.1) {
    if (!this.soundEnabled || !this.audioContext) return;

    try {
      const bufferSize = this.audioContext.sampleRate * duration;
      const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      
      // Gerar ruído branco filtrado para simular aplausos
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.1;
      }
      
      const source = this.audioContext.createBufferSource();
      const gainNode = this.audioContext.createGain();
      
      source.buffer = buffer;
      source.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      gainNode.gain.setValueAtTime(this.soundVolume * volume, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
      
      source.start(this.audioContext.currentTime);
    } catch (error) {
      console.warn('Erro ao reproduzir ruído:', error);
    }
  }

  playBackgroundMusic() {
    if (!this.musicEnabled || this.musicInterval) return;
    
    // Melodias ambient study music - progressões harmônicas relaxantes
    const melodies = [
      // Progressão em C maior (relaxante)
      [261.63, 329.63, 392.00, 329.63, 261.63, 392.00, 329.63, 261.63],
      // Progressão em A menor (contemplativa)
      [220.00, 261.63, 329.63, 293.66, 220.00, 329.63, 261.63, 220.00],
      // Progressão em F maior (calorosa)
      [174.61, 220.00, 261.63, 220.00, 174.61, 261.63, 220.00, 174.61],
      // Progressão em G maior (elevada)
      [196.00, 246.94, 293.66, 246.94, 196.00, 293.66, 246.94, 196.00]
    ];
    
    let noteIndex = 0;
    const currentMelody = melodies[this.currentMelodyIndex];
    
    this.musicInterval = setInterval(() => {
      if (this.musicEnabled && this.audioContext) {
        try {
          const note = currentMelody[noteIndex];
          const harmonicNote = note * 1.5; // Quinta perfeita para harmonia
          
          // Nota principal
          this.playAmbientTone(note, 3.5, this.musicVolume * 0.4);
          // Harmônico sutil
          setTimeout(() => {
            this.playAmbientTone(harmonicNote, 2.0, this.musicVolume * 0.2);
          }, 500);
          
          noteIndex = (noteIndex + 1) % currentMelody.length;
          
          // Trocar melodia a cada ciclo completo
          if (noteIndex === 0) {
            this.currentMelodyIndex = (this.currentMelodyIndex + 1) % melodies.length;
          }
        } catch (error) {
          console.warn('Erro na música de fundo:', error);
        }
      }
    }, 3000); // Intervalo de 3 segundos entre notas
  }

  playAmbientTone(frequency, duration, volume) {
    if (!this.audioContext) return;

    try {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      const filter = this.audioContext.createBiquadFilter();
      
      // Configurar filtro para som mais suave
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, this.audioContext.currentTime);
      filter.Q.setValueAtTime(1, this.audioContext.currentTime);
      
      oscillator.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
      oscillator.type = 'sine';
      
      // Envelope suave para música ambiente
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.5);
      gainNode.gain.linearRampToValueAtTime(volume * 0.7, this.audioContext.currentTime + duration * 0.7);
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
      
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + duration);
    } catch (error) {
      console.warn('Erro ao reproduzir tom ambiente:', error);
    }
  }

  stopBackgroundMusic() {
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }

  playSound(soundName) {
    if (this.sounds[soundName] && this.soundEnabled) {
      try {
        this.sounds[soundName]();
      } catch (error) {
        console.warn(`Erro ao reproduzir som ${soundName}:`, error);
      }
    }
  }

  setSoundEnabled(enabled) {
    this.soundEnabled = enabled;
  }

  setMusicEnabled(enabled) {
    this.musicEnabled = enabled;
    if (enabled) {
      this.playBackgroundMusic();
    } else {
      this.stopBackgroundMusic();
    }
  }

  setSoundVolume(volume) {
    this.soundVolume = Math.max(0, Math.min(1, volume));
  }

  setMusicVolume(volume) {
    this.musicVolume = Math.max(0, Math.min(1, volume));
  }

  // Método para tocar celebração completa ao finalizar quiz
  playCelebration() {
    if (!this.soundEnabled) return;
    
    // Sequência de celebração
    this.playSound('achievement');
    
    setTimeout(() => {
      this.playSound('confetti');
    }, 800);
    
    setTimeout(() => {
      this.playSound('levelUp');
    }, 1500);
  }
}

// Instância global do gerenciador de áudio
export const audioManager = new AudioManager();