class Api::V1::FavoritesController < ApplicationController
    #LISTAR FAVORTITOS
    def index
        @favorites_albums = current_user.favorites.where(favoritable_type: "Album").map(&:favoritable)
        @favorites_songs = current_user.favorites.where(favoritable_type: "Song").map(&:favoritable)
        @favorites_artists = current_user.favorites.where(favoritable_type: "Artist").map(&:favoritable)
    end

    #FAVORITAR
    def create
        current_user.favorites.create(favoritable_type: params[:favoritable_type], favoritable_id: params[:id])
        head :ok
    end

    #DESFAVORITAR
    def destroy
        @favoritable = current_user.favorites.find_by(favoritable_type: params[:favoritable_type], favoritable_id: params[:id])
        @favoritable.destroy
        head :ok
    end

end
