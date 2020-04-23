class Api::V1::RecentlyHeardsController < ApplicationController
    def create
        @recent_heard = current_user.recently_heards
            .create(album_id: params[:album_id])
        head :ok
    end
end
