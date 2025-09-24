import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Camera, Upload, User, Volume2, VolumeX, Music, Music2 as MusicOff, Speaker } from 'lucide-react';
import { PROFILE_IMAGES } from '@/lib/constants';
import { audioManager } from '@/lib/audio';

const ProfileEditDialog = ({ isOpen, onClose, userProfile, onSave }) => {
  const [formData, setFormData] = useState({
    name: userProfile.name || '',
    profileImage: userProfile.profileImage || PROFILE_IMAGES[0].url,
    soundEnabled: userProfile.soundEnabled !== false,
    musicEnabled: userProfile.musicEnabled !== false,
    soundVolume: userProfile.soundVolume || 0.4,
    musicVolume: userProfile.musicVolume || 0.6,
  });

  const [selectedImageType, setSelectedImageType] = useState('recommended');

  const handleSave = () => {
    audioManager.playSound('click');
    
    // Aplicar configurações de áudio imediatamente
    audioManager.setSoundEnabled(formData.soundEnabled);
    audioManager.setMusicEnabled(formData.musicEnabled);
    audioManager.setSoundVolume(formData.soundVolume);
    audioManager.setMusicVolume(formData.musicVolume);
    
    onSave(formData);
    onClose();
  };

  const handleImageSelect = (imageUrl) => {
    audioManager.playSound('click');
    setFormData(prev => ({ ...prev, profileImage: imageUrl }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({ ...prev, profileImage: e.target.result }));
        audioManager.playSound('click');
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleSound = () => {
    const newSoundState = !formData.soundEnabled;
    setFormData(prev => ({ ...prev, soundEnabled: newSoundState }));
    audioManager.setSoundEnabled(newSoundState);
    if (newSoundState) {
      audioManager.playSound('click');
    }
  };

  const toggleMusic = () => {
    const newMusicState = !formData.musicEnabled;
    setFormData(prev => ({ ...prev, musicEnabled: newMusicState }));
    audioManager.setMusicEnabled(newMusicState);
    if (newMusicState) {
      audioManager.playSound('click');
    }
  };

  const handleSoundVolumeChange = (value) => {
    const newVolume = value[0];
    setFormData(prev => ({ ...prev, soundVolume: newVolume }));
    audioManager.setSoundVolume(newVolume);
    // Tocar som de teste
    setTimeout(() => audioManager.playSound('click'), 100);
  };

  const handleMusicVolumeChange = (value) => {
    const newVolume = value[0];
    setFormData(prev => ({ ...prev, musicVolume: newVolume }));
    audioManager.setMusicVolume(newVolume);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary-green flex items-center gap-2">
            <User className="w-6 h-6" />
            Editar Perfil
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Nome do usuário */}
          <div className="space-y-2">
            <Label htmlFor="name">Nome de usuário</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Digite seu nome"
              className="text-lg"
            />
          </div>

          {/* Foto de perfil */}
          <div className="space-y-4">
            <Label>Foto de perfil</Label>
            
            {/* Preview da imagem atual */}
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <img
                  src={formData.profileImage}
                  alt="Preview do perfil"
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary-green"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </div>

            {/* Opções de seleção */}
            <div className="flex gap-4 justify-center">
              <Button
                variant={selectedImageType === 'recommended' ? 'default' : 'outline'}
                onClick={() => {
                  setSelectedImageType('recommended');
                  audioManager.playSound('click');
                }}
                className="flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                Imagens Recomendadas
              </Button>
              <Button
                variant={selectedImageType === 'upload' ? 'default' : 'outline'}
                onClick={() => {
                  setSelectedImageType('upload');
                  audioManager.playSound('click');
                }}
                className="flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Fazer Upload
              </Button>
            </div>

            {/* Imagens recomendadas */}
            {selectedImageType === 'recommended' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-3 gap-4"
              >
                {PROFILE_IMAGES.map((image) => (
                  <motion.button
                    key={image.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleImageSelect(image.url)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                      formData.profileImage === image.url
                        ? 'border-primary-green shadow-lg'
                        : 'border-gray-200 hover:border-primary-green-medium'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-24 object-cover"
                    />
                    {formData.profileImage === image.url && (
                      <div className="absolute inset-0 bg-primary-green bg-opacity-20 flex items-center justify-center">
                        <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      </div>
                    )}
                  </motion.button>
                ))}
              </motion.div>
            )}

            {/* Upload de arquivo */}
            {selectedImageType === 'upload' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-green transition-colors"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Clique para fazer upload de uma imagem</p>
                  <p className="text-sm text-gray-400">PNG, JPG até 5MB</p>
                </label>
              </motion.div>
            )}
          </div>

          {/* Configurações de áudio */}
          <div className="space-y-6">
            <Label className="text-lg font-semibold">Configurações de Áudio</Label>
            
            {/* Efeitos Sonoros */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  {formData.soundEnabled ? (
                    <Volume2 className="w-5 h-5 text-primary-green" />
                  ) : (
                    <VolumeX className="w-5 h-5 text-gray-400" />
                  )}
                  <div>
                    <p className="font-medium">Efeitos Sonoros</p>
                    <p className="text-sm text-gray-600">Sons de clique, acerto e erro</p>
                  </div>
                </div>
                <Button
                  variant={formData.soundEnabled ? 'default' : 'outline'}
                  size="sm"
                  onClick={toggleSound}
                >
                  {formData.soundEnabled ? 'Ligado' : 'Desligado'}
                </Button>
              </div>

              {/* Controle de volume dos efeitos */}
              {formData.soundEnabled && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="px-4 pb-2"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Speaker className="w-4 h-4 text-gray-600" />
                    <Label className="text-sm">Volume dos Efeitos</Label>
                    <span className="text-sm text-gray-500 ml-auto">
                      {Math.round(formData.soundVolume * 100)}%
                    </span>
                  </div>
                  <Slider
                    value={[formData.soundVolume]}
                    onValueChange={handleSoundVolumeChange}
                    max={1}
                    min={0}
                    step={0.1}
                    className="w-full"
                  />
                </motion.div>
              )}
            </div>

            {/* Música de Fundo */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  {formData.musicEnabled ? (
                    <Music className="w-5 h-5 text-primary-green" />
                  ) : (
                    <MusicOff className="w-5 h-5 text-gray-400" />
                  )}
                  <div>
                    <p className="font-medium">Música de Fundo</p>
                    <p className="text-sm text-gray-600">Trilha sonora ambient durante os quizzes</p>
                  </div>
                </div>
                <Button
                  variant={formData.musicEnabled ? 'default' : 'outline'}
                  size="sm"
                  onClick={toggleMusic}
                >
                  {formData.musicEnabled ? 'Ligada' : 'Desligada'}
                </Button>
              </div>

              {/* Controle de volume da música */}
              {formData.musicEnabled && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="px-4 pb-2"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Music className="w-4 h-4 text-gray-600" />
                    <Label className="text-sm">Volume da Música</Label>
                    <span className="text-sm text-gray-500 ml-auto">
                      {Math.round(formData.musicVolume * 100)}%
                    </span>
                  </div>
                  <Slider
                    value={[formData.musicVolume]}
                    onValueChange={handleMusicVolumeChange}
                    max={1}
                    min={0}
                    step={0.1}
                    className="w-full"
                  />
                </motion.div>
              )}
            </div>

            {/* Teste de áudio */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => audioManager.playSound('correct')}
                disabled={!formData.soundEnabled}
                className="flex-1"
              >
                🎵 Testar Som
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => audioManager.playCelebration()}
                disabled={!formData.soundEnabled}
                className="flex-1"
              >
                🎉 Testar Celebração
              </Button>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => {
                audioManager.playSound('click');
                onClose();
              }}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSave}
              className="flex-1 bg-primary-green hover:bg-primary-green-medium"
              disabled={!formData.name.trim()}
            >
              Salvar Alterações
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileEditDialog;